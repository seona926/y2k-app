"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuestionStore } from "../../../../stores/questionStore";

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

const fetchQuestions = async () => {
  const response = await fetch('/api/question');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export default function Questions({ params: { id } }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const questionsPerPage = 5;

  const setQuestions = useQuestionStore((state) => state.setQuestions);
  const questions = useQuestionStore((state) => state.questions);
  
  const router = useRouter();
  const [totalQuestions, setTotalQuestions] = useState<number>(10);


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


  // 현재 페이지의 질문들을 가져오는 함수
  const getCurrentQuestions = () => {
    return questions.slice(currentSetIndex, currentSetIndex + questionsPerPage);
  };

  // 다음 페이지로 이동하는 함수
  const handleNext = () => {
    if (currentSetIndex + questionsPerPage < questions.length) {
      setCurrentSetIndex(currentSetIndex + questionsPerPage);
    }
  };

  // 현재 페이지의 질문들을 가져오기
  const currentQuestions = getCurrentQuestions();

  // 마지막 페이지 확인
  const isLastPage = currentSetIndex + questionsPerPage >= questions.length;

  const handleSubmit = () => {
    router.push("/results");
  };

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
        console.log(data)
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      }
    };

    getQuestions();
  }, [setQuestions]);

  // if (questions.length === 0) return <div>Loading...</div>;/

  return (
    <div className="flex flex-col">
      <div className="mt-8 text-2xl font-bold mb-8 text-center">Choose one option!</div>
      <div className="question-page-content">
        {currentQuestions.map((question: any) => (
          <div key={question.id} className="mb-5">
            <p className="text-lg font-semibold mb-2">
              {question.id}. {question.content}
            </p>
            <div>
              {question.Option?.map((option, index) => (
                <div key={index} className="mb-1">
                  <input 
                    type="radio" className="mr-1" 
                    id={`question${question.id}_option${index}`} 
                    name={`question${question.id}`} 
                  />
                  <label htmlFor={`question${question.id}_option${index}`}>
                    {option.content}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-16 h-10 mt-10 mb-10 border border-gray-500 rounded-md"
        onClick={isLastPage ? handleSubmit : handleNext}
      >
        {isLastPage ? "FINISH" : "NEXT"}
      </button>
    </div>
  );
}
