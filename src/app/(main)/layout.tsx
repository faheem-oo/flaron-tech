import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingLeaves from "@/components/ui/FloatingLeaves";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FloatingLeaves />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </>
  );
}
