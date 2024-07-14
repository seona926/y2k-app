"use client";

import React, { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
// import styles from "../styles/main.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MainPage() {
  const user = { nickname: "Sophia" }; // Assuming user info is stored here
  const router = useRouter();

  const chatRooms = [
    { id: 1, nickname: "EPIKHIGH", message: "오늘은 좀 어떻게 지내고있어?" },
    { id: 2, nickname: "SOPHIA", message: "아~~~ 오늘 아침에 지각했어" },
    {
      id: 3,
      nickname: "OMGOMG",
      message: "이번 주말에 우리 듄2 보러가자 ㅋㅋㅋ",
    },
    { id: 4, nickname: "NewJeans", message: "나는 베트남여행이 더 좋은듯?" },
    { id: 5, nickname: "__GoodGood___", message: "커피땡긴다 ㅋㅋ ㅠㅠ" },
  ];

  const handleSendClick = () => {
    router.push("/message/read/l_eein1234");
  };

  return (
    <>
      {/* <div className="fixed top-4 left-4 lg:hidden z-20">
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
      </div> */}
      <div className="text-xl text-gray-700 font-bold mt-3">My Profile</div>
      <div className="h-28 w-full md:h-32 flex justify-end items-center bg-white mt-2.5 mb-2.5 border border-gray-400 rounded bg-stone-100/70">
        <div className="flex flex-col items-end mr-3.5">
          <span className="text-xl text-gray-700 font-bold">
            {user?.nickname || "Lisboa"}
          </span>
          <span className="text-lg">I&apos;m looking for freedom</span>
        </div>
        <img
          src="https://api.dicebear.com/8.x/pixel-art/svg?seed=James.svg"
          alt="Avatar"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white p-2 object-cover border border-gray-400 mr-2.5"
        />
      </div>
      <div className="text-xl text-gray-700 font-bold mt-6 mb-3">Messages</div>
      <div className="grid grid-cols-1 gap-2.5 mb-16 w-full">
        {chatRooms.map((room) => (
          <div
            key={room.id}
            className="h-20 w-full flex p-5 items-center justify-between bg-stone-50 rounded-lg shadow-md my-0.5 relative text-sm"
            onClick={handleSendClick}
          >
            <div className="flex flex-row w-full">
              <span className="flex p-1.5 items-center justify-center absolute top-[12%] left-[-0.2%] transform translate-x-[-50%] translate-y-[-50%] z-10 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full">
                N
              </span>
              <img
                src={`https://api.dicebear.com/8.x/pixel-art/svg?seed=John${room.id}-${room.nickname}.svg`}
                alt="Avatar"
                className="w-14 h-14 rounded-full border border-gray-400 bg-white p-0.5 object-cover mr-2.5"
              />
              <div className="ml-2.5 w-[59%]">
                <div className="text-lg font-bold mb-1.25">{room.nickname}</div>
                <p style={{ margin: "0px" }}>
                  {room.message.length > 20
                    ? `${room.message.slice(0, 25)}...`
                    : room.message}
                </p>
              </div>
            </div>
            <div className="hidden md:block btn-open" onClick={handleSendClick}>
              OPEN
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-full max-w-md h-11 fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 
      focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 px-5 py-2.5 text-center me-2 mb-2 text-gray-700 mt-16
      border-none text-xl font-bold rounded-md cursor-pointer"
      >
        <Link href="/match">FIND SOULMATE</Link>
      </button>
    </>
  );
}
