"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="topbar relative">
      <Link href="/" className="flex items-center gap-4">
        <div className="relative w-12 h-12 overflow-hidden">
          <Image
            src="/logo/logo-no-background.svg"
            alt="logo"
            layout="fill"
            objectFit="cover"
            className="transform scale-110"
          />
        </div>
        <p className="text-2xl font-bold text-white max-xs:hidden">KISMET</p>
      </Link>

      {/* 메뉴 - 화면이 작아질 때 숨김 처리 */}
      <div className="hidden md:flex flex-row justify-center gap-4 ml-8 w-62">
        <Link href="/" className="text-white hover:text-gray-300">
          Match
        </Link>
        <Link href="/" className="text-white hover:text-gray-300">
          Something
        </Link>
        <Link href="/" className="text-white hover:text-gray-300">
          My Page
        </Link>
      </div>

      {/* 햄버거 아이콘 - 화면이 작아질 때 보이게 처리 */}
      <div className="md:hidden">
        <button
          className="text-white hover:text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* 드롭다운 메뉴 영역 - 클릭 시 보이게 처리 */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-700 py-4 md:hidden">
          <div className="flex flex-col items-center gap-4">
            <Link href="/" className="text-white hover:text-gray-300">
              메뉴1
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              메뉴2
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              메뉴3
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
