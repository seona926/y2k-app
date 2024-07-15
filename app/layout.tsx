import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Nanum_Gothic } from "next/font/google";

export const metadata: Metadata = {
  title: "KISMET",
  description: "Find Your Soulmate",
  icons: {
    icon: "/favicon/kismet-favicon-color.png",
  },
};

const nanumGothic = Nanum_Gothic({ subsets: ["latin"], weight: ["400"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`bg-gradient-to-b from-emerald-50 to-red-100 ${nanumGothic.className}`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
