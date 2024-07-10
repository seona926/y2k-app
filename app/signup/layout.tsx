import { Inter } from "next/font/google";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-dark-1`}>{children}</body>
    </html>
  );
}
