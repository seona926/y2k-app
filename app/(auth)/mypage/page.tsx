"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MyPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="fixed top-4 left-4 lg:hidden">
        <Link href="/">
          <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-300 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="text-2xl text-bold">My Page</div>
    </div>
  );
}
