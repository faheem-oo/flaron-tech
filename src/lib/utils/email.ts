import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailOptions {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ subject, html, replyTo }: EmailOptions) {
  // In development or when SMTP is not configured, log instead of sending
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("Email would be sent:", { subject, replyTo });
    console.log("Configure SMTP_USER and SMTP_PASS env variables to enable email sending.");
    return { success: true, dev: true };
  }

  await transporter.sendMail({
    from: `"Flaron Tech" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    subject,
    html,
    replyTo,
  });

  return { success: true };
}
