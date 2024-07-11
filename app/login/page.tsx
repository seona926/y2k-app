import React from "react";
import Link from "next/link";

export default function Login() {
  return (
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
