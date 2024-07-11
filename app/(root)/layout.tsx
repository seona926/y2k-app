import { Metadata } from "next";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-fuchsia-300 to-red-300">
        <main>
          <section className="main-container">
            <div className="w-full max-w-3xl p-10">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
