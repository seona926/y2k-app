import { Metadata } from "next";
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
          <section className="main-container">
            <div className="w-full max-w-4xl p-10">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
