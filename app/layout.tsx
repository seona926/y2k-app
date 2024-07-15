import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "KISMET",
  description: "Find Your Soulmate",
  icons: {
    icon: "/favicon/kismet-favicon-color.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gradient-to-b from-emerald-50 to-red-100">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
