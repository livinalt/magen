import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="bg-[#0B0F19] text-white overflow-hidden"
        suppressHydrationWarning
      >
        <Providers>
          <div className="flex h-screen">
            <Sidebar />

            <div className="flex-1 flex flex-col h-screen overflow-hidden">
              <Topbar />

              <main className="flex-1 overflow-y-auto p-6">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}