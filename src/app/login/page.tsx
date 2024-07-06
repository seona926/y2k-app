import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>
        <Link href="/main">
          <a>Login</a>
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
