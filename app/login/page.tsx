import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <>
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
      <div className="flex flex-col flex-auto items-center">
        <h1 className="text-2xl">Login to our world 🐋</h1>
        <input
          className="p-1 m-1 mt-7 w-4/12 rounded-md text-base"
          type="text"
          placeholder="Username"
        />
        <input
          className="p-1 m-1 w-4/12 rounded-md text-base"
          type="password"
          placeholder="Password"
        />
        <button className="p-1 bg-teal-500 text-slate-50 mt-2.5 border-none text-base rounded-md w-4/12">
          <Link href="/">
            <div>Login</div>
          </Link>
        </button>
      </div>
    </>
  );
}
/*
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

input {
  padding: 10px;
  margin: 10px;
  width: 200px;
}

button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}


*/
