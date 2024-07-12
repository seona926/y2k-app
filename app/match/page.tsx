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
    <div className="flex flex-col items-center justify-center h-full">
      <div className="fixed top-4 left-4 lg:hidden">
        <Link href="/">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-300">
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
      <div className="text-2xl text-bold">질문 갯수를 골라주세요!</div>
      <div className="flex flex-col items-center justify-center h-2/6">
        <button
          className="h-11 w-96 text-base text-bold bg-stone-100 rounded-md shadow-sm hover:bg-indigo-100"
          onClick={() => handleSelectQuestions(10)}
        >
          10개 👉 간단하게!
        </button>
        <button
          className="h-11 w-96 mt-5 mb-5 text-base text-bold bg-stone-100 rounded-md shadow-sm hover:bg-indigo-100"
          onClick={() => handleSelectQuestions(15)}
        >
          15개 👉 보다 정밀하게!
        </button>
        <button
          className="h-11 w-96 text-base text-bold bg-stone-100 rounded-md shadow-sm hover:bg-indigo-100"
          onClick={() => handleSelectQuestions(20)}
        >
          20개 👉 나와 꼭맞는 단짝 찾기!
        </button>
      </div>
    </div>
  );
};

export default FindMatchesPage;

/*
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

a {
  padding: 10px;
  background-color: #27ae60;
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}


*/
