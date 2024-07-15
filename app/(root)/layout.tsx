"use client";

import { Metadata } from "next";
import "../globals.css";
import { Nanum_Gothic } from "next/font/google";
import Topbar from "../../components/TopBar";
import { useEffect, useState } from "react";

const nanumGothic = Nanum_Gothic({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-b from-emerald-50 to-red-100 min-h-screen flex flex-col ${nanumGothic.className}`}
      >
        <Topbar />
        <main className="flex-grow flex flex-col justify-center">
          <section className="flex flex-row justify-center flex-grow">
            <div className="w-full max-w-3xl p-5">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
