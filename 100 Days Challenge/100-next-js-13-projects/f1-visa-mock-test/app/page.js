"use client";
import React, { useState } from 'react';
import RandomQuestionApp from "@components/randomQuestion";
import Image from "next/image";
import greentick from '../public/greentick.png'

// ... (existing code)
// ... (existing code)

// ... (existing code)

const Home = () => {
  const [mockTestStarted, setMockTestStarted] = useState(false);

  const handleStartMockTest = () => {
    setMockTestStarted(true);
  };

  return (
    <section className="app mb-50 w-full h-screen flex justify-center items-center flex-col">
      {/* Conditionally render based on whether the mock test has started */}
      {!mockTestStarted && (
        <>
          <h1 className="head_text text-center">
            VisaPrep
            <br className="max-md:hidden" />
          </h1>
          <div className="blue_gradient subhead_text text-center">Your F1 Visa Mock Test Companion</div>
          <p className="desc text-center my-5">
            The ultimate F1 visa interview companion. Gain confidence with practice questions, open-source, and innovative. Your go-to tool for success.
          </p>

          <div className="glassmorphism">
            <ul className="list-disc list-inside">
              <li className="flex items-center mb-3">
                <Image
                  src={greentick}
                  width={27}
                  height={27}
                  className="rounded-full"
                  alt="profile"
                />
                <p className="desc my-5 ml-2">
                  Click on "Take me to mock test" button to start.
                </p>
              </li>
              <li className="flex items-center mb-3">
                <Image
                  src={greentick}
                  width={27}
                  height={27}
                  className="rounded-full"
                  alt="profile"
                />
                <p className="desc my-5 ml-2">
                  After clicking, you will see the "Start Mock Test" button.
                </p>
              </li>
              <li className="flex items-center mb-3">
                <Image
                  src={greentick}
                  width={27}
                  height={27}
                  className="rounded-full"
                  alt="profile"
                />
                <p className="desc my-5 ml-2">
                  Upon clicking the "Start Mock Test" button, the timer will start along with the questions.
                </p>
              </li>
            </ul>
          </div>

          {/* Button to start the mock test */}
          <button onClick={handleStartMockTest} className="blue_btn my-8">Take Me to Mock Test</button>
        </>
      )}
      {/* Conditionally render the RandomQuestionApp when the mock test has started */}
      {mockTestStarted && <RandomQuestionApp />}
    </section>
  );
};

export default Home;
