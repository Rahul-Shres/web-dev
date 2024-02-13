"use client";
import React, { useState } from "react";
import Title from "./components/title/title";

export default function Home() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const inputStyle = "border-solid hover:border-dotted m-24";

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleDateChange(e) {
    e.preventDefault();
    setDate(e.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Title classes="text-5xl" text={!name ? "Title" : name} />
      <Title
        classes="text-4xl p-10 mb -4"
        text={!date ? "Select Date" : date}
      />
      <p>
        DocuSign eSignature is the world&apos;s #1 way for businesses and
        individuals to securely send and sign agreements from practically
        anywhere, at any time, from almost any device. The DocuSign app is easy
        to use, includes unlimited free signing for all parties, and is trusted
        by millions of people worldwide.
      </p>
      <footer className="flex flex-row justify-between ">
        <input
          onChange={handleChange}
          value={name}
          type="text"
          className={`bg-blue-100 ${inputStyle}`}
        />
        <input
          onChange={handleDateChange}
          value={date}
          type="date"
          className={`bg-blue-100 ${inputStyle}`}
        />
      </footer>
    </main>
  );
}
