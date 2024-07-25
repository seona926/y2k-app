"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { COUNTRIES } from "../../../lib/countries";
import { SelectMenuOption } from "../../../lib/types";
import CountrySelector from "../../../components/selector";

export default function MyPage() {
  const myRef = React.createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState("AF");

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
      <div className="flex flex-col items-center border border-gray-300 py-10 px-10 mx-8 h-3/4 min-h-72 w-3/4">
        <div className="flex flex-col items-center justify-center mb-6">
          <Image
            src="/assets/profile.svg"
            alt="logo"
            width={90}
            height={90}
            className="transform scale-110"
          />
          <div className="text-base font-semibold mt-4">Sophia</div>
        </div>
        <div className="w-full h-16 flex flex-row justify-center items-center px-3">
          <label
            className="w-1/4 block align-middle text-base font-semibold text-gray-900 dark:text-white"
            htmlFor="user_avatar"
          >
            Upload file
          </label>
          <form className="w-4/6">
            <input
              className="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
          </form>
        </div>
        <div className="w-full h-16 flex flex-row justify-center items-center px-3">
          <label
            htmlFor="first_name"
            className="w-1/4 align-middle block text-base font-semibold font-medium text-gray-800 dark:text-white"
          >
            Nickname
          </label>
          <div className="w-4/6 flex flex-row">
            <input
              type="text"
              id="first_name"
              className="w-9/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
            />
            <button className="w-3/12 ml-1 text-base font-semibold bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
              CHECK
            </button>
          </div>
        </div>
        <div className="w-full h-16 flex flex-row justify-center items-center px-3">
          <label
            htmlFor="countries"
            className="block w-1/4 text-base font-semibold text-gray-900 dark:text-white"
          >
            Country
          </label>
          <CountrySelector
            id={"countries"}
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onChange={(val) => setCountry(val)}
            // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
            selectedValue={
              COUNTRIES.find(
                (option) => option.value === country
              ) as SelectMenuOption
            }
          />
        </div>
        <div className="w-full h-40 flex flex-row justify-center items-center px-3">
          <form className="w-full flex flex-row justify-center items-center">
            <label
              htmlFor="message"
              className="w-1/4 block mb-2 text-base font-semibold text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-4/6 h-36 block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </form>
        </div>
        <div className="w-full h-4 flex flex-row justify-center items-center px-3 mt-14">
          <button className="w-1/6 ml-1 text-base font-semibold bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
