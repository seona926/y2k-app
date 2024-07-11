import { Inter } from "next/font/google";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <section className="main-container-full">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
