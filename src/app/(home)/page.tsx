import React from "react";
import Link from "next/link";

export default function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome to the Dating App!zzz</p>
      <Link href="/match">
        <a>Find Match</a>
      </Link>
    </div>
  );
}
