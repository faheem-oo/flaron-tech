import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/utils/email";
import { getDatabase } from "@/lib/utils/database";

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().min(1),
  timeline: z.string().min(1),
  description: z.string().min(20),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = quoteSchema.parse(body);

    const db = await getDatabase();
    await db.collection("quote_submissions").insertOne({
      ...data,
      createdAt: new Date(),
    });

    await sendEmail({
      subject: `[Flaron Tech Quote] ${data.projectType} — ${data.name}`,
      replyTo: data.email,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Name:</td><td style="padding:8px">${escapeHtml(data.name)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email:</td><td style="padding:8px">${escapeHtml(data.email)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Company:</td><td style="padding:8px">${escapeHtml(data.company || "N/A")}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Phone:</td><td style="padding:8px">${escapeHtml(data.phone || "N/A")}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Project Type:</td><td style="padding:8px">${escapeHtml(data.projectType)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Timeline:</td><td style="padding:8px">${escapeHtml(data.timeline)}</td></tr>
        </table>
        <hr/>
        <h3>Project Description</h3>
        <p>${escapeHtml(data.description).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }
    if (error instanceof Error && error.message.includes("MONGODB_URI")) {
      return NextResponse.json(
        { error: "Database is not configured" },
        { status: 500 }
      );
    }
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Failed to submit quote request" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
