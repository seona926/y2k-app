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
    router.push("/read-message/l_eein1234");
  };

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
      <div className="text-xl font-bold mt-12">My Profile</div>
      <div className="h-14vh w-full flex justify-end items-center bg-white mt-2.5 mb-2.5 border border-gray-400 rounded">
        <div className="flex flex-col items-end mr-3.5">
          <span className="text-2xl font-medium">
            {user?.nickname || "Lisboa"}
          </span>
          <span className="text-lg">I&apos;m looking for freedom</span>
        </div>
        <img
          src="https://api.dicebear.com/8.x/pixel-art/svg?seed=James.svg"
          alt="Avatar"
          className="w-24 h-24 rounded-full bg-white p-2 object-cover border border-gray-400 mr-2.5"
        />
      </div>
      <div className="text-xl font-medium mt-5.5 mb-2.5">Messages</div>
      <div className="grid grid-cols-1 gap-2.5 mb-15">
        {chatRooms.map((room) => (
          <div
            key={room.id}
            className="h-20 flex p-2.5 items-center justify-start bg-white rounded-lg shadow-md my-0.5 relative text-sm"
          >
            <span className="flex items-center justify-center absolute top-[17%] left-[2%] transform translate-x-[-50%] translate-y-[-50%] z-10 bg-red-600 text-white text-xs font-bold w-4 h-4 rounded-full">
              N
            </span>
            <img
              src={`https://api.dicebear.com/8.x/pixel-art/svg?seed=John${room.id}-${room.nickname}.svg`}
              alt="Avatar"
              className="w-12 h-15 rounded-full border border-gray-300 bg-white p-0.5 object-cover mr-2.5"
            />
            <div className="ml-2.5 w-[59%]">
              <div className="text-lg font-medium mb-1.25">{room.nickname}</div>
              <p style={{ margin: "0px" }}>
                {room.message.length > 20
                  ? `${room.message.slice(0, 25)}...`
                  : room.message}
              </p>
            </div>
            <div
              className="flex justify-center items-center p-1.5 w-[3.2em] bg-yellow-300 rounded font-bold text-gray-700 ml-1"
              onClick={handleSendClick}
            >
              OPEN
            </div>
          </div>
        ))}
      </div>
      <button className="w-full h-11 bg-teal-500 text-slate-50 mt-8 mb-10 border-none text-xl font-bold rounded-md">
        <Link href="/match">Find My Soulmate</Link>
      </button>
    </>
  );
}
