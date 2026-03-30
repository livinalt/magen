import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white overflow-hidden">

        <div className="flex h-screen">

          {/* Sidebar (fixed height) */}
          <Sidebar />

          {/* Main column */}
          <div className="flex-1 flex flex-col h-screen">

            {/* Topbar */}
            <Topbar />

            {/* Scrollable content ONLY here */}
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>

          </div>
        </div>

      </body>
    </html>
  );
}