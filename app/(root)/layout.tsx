import Header from "@/components/nav/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-50">
      <Header />

      <main className="min-h-screen">{children}</main>
    </div>
  );
}
