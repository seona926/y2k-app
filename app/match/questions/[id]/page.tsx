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
      options: [
        "1 time a week or less is enough!",
        "At least 2 times a week if possible.",
        "More than 2 times!",
        "I want to live with my soulmate!"
      ]
    },
    {
      id: 2,
      text: "How much time do you want to spend your time on your weekends or vacation with your soulmate?",
      options: [
        "1 time a week or less is enough!",
        "At least 2 times a week if possible.",
        "More than 2 times!",
        "I want to live with my soulmate!"
      ]
    },
    {
      id: 3,
      text: "Which type of date do you want with your soulmate?",
      options: [
        "1 time a week or less is enough!",
        "At least 2 times a week if possible.",
        "More than 2 times!",
        "I want to live with my soulmate!"
      ]
    },
    {
      id: 4,
      text: "How many times do you want to meet your soulmate?",
      options: [
        "1 time a week or less is enough!",
        "At least 2 times a week if possible.",
        "More than 2 times!",
        "I want to live with my soulmate!"
      ]
    },
    {
      id: 5,
      text: "How much time do you want to spend your time on your weekends or vacation with your soulmate?",
      options: [
        "1 time a week or less is enough!",
        "At least 2 times a week if possible.",
        "More than 2 times!",
        "I want to live with my soulmate!"
      ]
    },
    {
      id: 6,
      text: "Which type of date do you want with your soulmate?",
      options: [
        "1 time a week or less is enough!",
        "At least 2 times a week if possible.",
        "More than 2 times!",
        "I want to live with my soulmate!"
      ]
    },
    {
      id: 7,
      text: "Which type of date do you want with your soulmate?",
      options: [
        "1 time a week or less is enough!",
        "At least 2 times a week if possible.",
        "More than 2 times!",
        "I want to live with my soulmate!"
      ]
    },
    {
      id: 8,
      text: "How many times do you want to meet your soulmate?",
      options: [
        "1 time a week or less is enough!",
        "At least 2 times a week if possible.",
        "More than 2 times!",
        "I want to live with my soulmate!"
      ]
    },
    {
      id: 9,
      text: "How much time do you want to spend your time on your weekends or vacation with your soulmate?",
      options: [
        "1 time a week or less is enough!",
        "At least 2 times a week if possible.",
        "More than 2 times!",
        "I want to live with my soulmate!"
      ]
    },
    {
      id: 10,
      text: "Which type of date do you want with your soulmate?",
      options: [
        "1 time a week or less is enough!",
        "At least 2 times a week if possible.",
        "More than 2 times!",
        "I want to live with my soulmate!"
      ]
    },
  ];
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
      <div className="mt-8 text-2xl font-bold mb-8 text-center">Choose one option!</div>
      <div className="question-page-content">
        {currentQuestions.map((question) => (
          <div key={question.id} className="mb-5">
            <p className="text-lg font-semibold mb-2">
              {question.id}. {question.text}
            </p>
            <div>
            {question.options?.map((option, index) => (
              <div key={index} className="mb-1">
                <input type="radio" className="mr-1" id={`question${question.id}_option${index}`} name={`question${question.id}`} />
                <label htmlFor={`question${question.id}_option${index}`}>{option}</label>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-16 h-10 mt-10 mb-10 border border-gray-500 rounded-md"
        onClick={
          currentSetIndex + 5 < mockQuestions.length ? handleNext : handleSubmit
        }
      >
        {currentSetIndex + 5 < mockQuestions.length ? "NEXT" : "SUBMIT"}
      </button>
    </div>
  );
}
