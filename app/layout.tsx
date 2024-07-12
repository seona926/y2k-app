import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KISMET",
  description: "Find Your Soulmate",
  icons: {
    icon: "/favicon/kismet-favicon-color.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-stone-50 to-teal-100">
        {children}
      </body>
    </html>
  );
}
