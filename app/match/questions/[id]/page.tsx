"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface Option {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
}

export default function Questions({ params: { id } }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [options, setOptions] = useState<{ [key: string]: string }>({});
  const [questions, setQuestions] = useState<Question[]>([]);
  const router = useRouter();
  const [totalQuestions, setTotalQuestions] = useState<number>(10);
  const handleNext = () => {
    setCurrentSetIndex((prevIndex) => prevIndex + 5);
  };

  const mockQuestions = [
    {
      id: 1,
      text: "How many times do you want to meet your soulmate?",
    },
    {
      id: 2,
      text: "How much time do you want to spend your time on your weekends or vacation with your soulmate?",
    },
    {
      id: 3,
      text: "Which type of date do you want with your soulmate?",
    },
    {
      id: 4,
      text: "How many times do you want to meet your soulmate?",
    },
    {
      id: 5,
      text: "How much time do you want to spend your time on your weekends or vacation with your soulmate?",
    },
    {
      id: 6,
      text: "Which type of date do you want with your soulmate?",
    },
    {
      id: 7,
      text: "Which type of date do you want with your soulmate?",
    },
    {
      id: 8,
      text: "How many times do you want to meet your soulmate?",
    },
    {
      id: 9,
      text: "How much time do you want to spend your time on your weekends or vacation with your soulmate?",
    },
    {
      id: 10,
      text: "Which type of date do you want with your soulmate?",
    },
  ];
  const mockOptions = {};

  const handleAnswerSelect = (questionId: number, option: string) => {
    setOptions((prev) => ({ ...prev, [questionId]: option }));
  };

  // 현재 페이지의 질문들을 가져오기
  const currentQuestions = mockQuestions.slice(
    currentSetIndex,
    currentSetIndex + 5
  );

  console.log("question id: ", id);

  const handleSubmit = () => {
    const nextSetIndex = currentSetIndex + 3;
    if (nextSetIndex < totalQuestions) {
      setCurrentSetIndex(nextSetIndex);
    } else {
      router.push("/results");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="question-page-content">
        {currentQuestions.map((question) => (
          <div key={question.id}>
            <p>
              {question.id}. {question.text}
            </p>
          </div>
        ))}
      </div>
      <button
        className="mt-20"
        onClick={
          currentSetIndex + 5 < mockQuestions.length ? handleNext : handleSubmit
        }
      >
        {currentSetIndex + 5 < mockQuestions.length ? "NEXT" : "SUBMIT"}
      </button>
    </div>
  );
}
