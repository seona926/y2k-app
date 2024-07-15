"use client";

import { useState, useEffect } from "react";
import "../../globals.css";
import Topbar from "../../../components/TopBar";

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [topbarHeight, setTopbarHeight] = useState(0);

  useEffect(() => {
    // Topbar의 높이를 가져오기 위해 DOM 요소를 사용하여 계산
    const topbar = document.querySelector(".topbar");
    if (topbar) {
      const height = topbar.clientHeight;
      setTopbarHeight(height);
    }
  }, []);

  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-emerald-50 to-red-100">
        <Topbar />
        <main
          className="flex-1"
          style={{ height: `calc(100vh - ${topbarHeight}px)` }}
        >
          <section className="main-container w-full h-full">
            <div className="w-full h-full max-w-4xl flex flex-col justify-center items-center">
              {children}
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
