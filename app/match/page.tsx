"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const FindMatchesPage: React.FC = () => {
  const router = useRouter();

  const handleSelectQuestions = (numQuestions: number) => {
    router.push(`/match/questions/${numQuestions}`); // Pass the number of questions as a URL parameter
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
      <div id="main-text" className="text-4xl font-bold mb-5 mt-10">To find your soulmate...</div>
      <h4 className="text-lg italic text-neutral-500 dark:text-neutral-400 mb-10 text-center">We will ask you 40 questions.<br /> Please take your time and choose the answer that is closest to you. <br />And Find out which person is most like you.</h4>
      <div className="flex flex-col items-center justify-center h-1/6">
        <button
          className="h-11 w-96 text-base font-bold text-neutral-700 bg-stone-100 rounded-md shadow-sm hover:bg-indigo-100"
          onClick={() => handleSelectQuestions(40)}
        >
          Start!
        </button>
      </div>
    </div>
  );
};

export default FindMatchesPage;
