"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WriteMessage({ params: { id } }) {
  const { userId } = useParams<{ userId: string }>();
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [mockMessage, setMockMessage] = useState(
    "Hello Alison, This is Lee. I'm little depressed these days because it's not going fine to move my company."
  );

  const handleSendClick = (e: React.FormEvent) => {
    alert("메세지 전송 완료👌");
    router.push("/");
  };

  // useEffect(() => {
  //   fetch(`http://localhost:3001/message/getMessage/${userId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMessage(data.message); // 가정: 응답 데이터에 메시지 내용이 'content' 필드에 있음
  //     });
  // }, [userId]);

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
      <div className="text-xl text-gray-700 font-bold mt-3">Write Message</div>
      <div className="h-3/4 w-full flex flex-col justify-end items-center mt-2.5 mb-2.5">
        <textarea
          value={mockMessage}
          className="w-3/4 h-full mt-8 p-4 bg-yellow-100/50 border border-gray-400 resize-none text-base"
          onChange={(e) => setMockMessage(e.target.value)}
        />
        <div className="w-full h-32 flex flex-row justify-center items-center">
          <button className="btn-open w-20" onClick={handleSendClick}>
            SEND
          </button>
          <button className="btn-cancel w-20" onClick={() => router.back()}>
            BACK
          </button>
        </div>
      </div>
    </>
  );
}
