"use client";

import React, { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
// import styles from "../styles/main.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DoughnutChart from '../../components/DoughnutChart';
import {
  ChartOptions,
  ChartData
} from 'chart.js';

export default function MainPage() {
  const router = useRouter();

  const ageData: ChartData<'doughnut'> = {
    labels: ['Teens', '20s', '30s', '40s', '50+'],
    datasets: [
      {
        label: 'Age Distribution',
        data: [15, 30, 25, 20, 10], // 임의의 비율
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const genderData: ChartData<'doughnut'> = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        label: 'Gender Distribution',
        data: [40, 50, 10], // 임의의 비율
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '소울메이트 만나기 통계',
      },
    },
  };


  return (
    <div className="min-h-screen flex flex-col start text-center text-neutral-600 dark:text-neutral-200">
      {/*  Main headings  */}
      <div id="main-text" className="text-4xl font-bold mb-5 mt-10">Somewhere, your soulmate is out there...</div>
      <h4 className="text-lg italic text-neutral-500 dark:text-neutral-400 mb-10">Take a moment and meet that one!</h4>
      <div className="grid grid-cols-1 gap-2.5 mb-10 w-full">
        <div>
          <div className="border border-cyan-500 rounded-xl">
            <h1 className="font-bold mt-10 text-xl"><span className="italic text-cyan-600">This month,</span> 1,335 people met their soulmates!</h1>
            <div className="flex justify-center items-center pb-5">
              <div style={{ width: '40%', margin: 'auto' }}>
                <DoughnutChart data={ageData} options={options} />
              </div>
              <div style={{ width: '40%', margin: 'auto', marginTop: '50px' }}>
                <DoughnutChart data={genderData} options={options} />
              </div>
            </div>
          </div>
          <div className="border border-cyan-500 rounded-xl mt-7">
            <h1 className="font-bold mt-10 text-xl"><span className="italic text-cyan-600">This year,</span> 3,434 people met their soulmates!</h1>
            <div className="flex justify-center items-center pb-5">
              <div style={{ width: '40%', margin: 'auto' }}>
                <DoughnutChart data={ageData} options={options} />
              </div>
              <div style={{ width: '40%', margin: 'auto', marginTop: '50px' }}>
                <DoughnutChart data={genderData} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-5">
        <button
          className="w-full max-w-md h-11 fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 
        focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 px-5 py-2.5 text-center me-2 mb-2 text-gray-700 mt-10
        border-none text-xl font-bold rounded-md cursor-pointer"
        >
          <Link href="/match">FIND SOULMATE</Link>
        </button>
      </div>
    </div>
  );
}
