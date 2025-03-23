import Footer from "@/components/footer/Footer";
import Header from "@/components/nav/Header";
import { Suspense } from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-secondary-cream">
      <Header />

      <main className="min-h-screen ">{children}</main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
