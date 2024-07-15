"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function MyPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
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
      <div className="text-2xl font-bold mb-10">My Page</div>
      <div className="flex flex-col justify-center items-center border border-gray-300 mx-8 h-3/4 w-3/4 md:h-32">
        <div className="flex flex-row items-end">
          <div className="text-base font-semibold mr-5">Sophia</div>
          <Image
            src="/assets/profile.svg"
            alt="logo"
            width={90}
            height={90}
            className="transform scale-110"
          />
        </div>
        <div className="flex flex-row items-end">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nickname
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
          />
        </div>
      </div>
    </div>
  );
}
