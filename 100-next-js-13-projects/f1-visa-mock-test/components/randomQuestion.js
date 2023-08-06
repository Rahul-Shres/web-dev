'use client'

import React, { useState, useEffect } from 'react';
import '../app/globals.css';


const RandomQuestionApp = () => {

  const questionTextClass = 'mt-12 text-3xl font-medium text-black sm:text-3xl max-w-2xl';
  const mobileQuestionTextClass = 'mt-12 text-2xl font-medium text-black w-full';


  // State to manage the questions and current question index
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // State to track the timer for each question
  const [timer, setTimer] = useState(25);
  // State to track whether the timer is active or not
  const [isTimerActive, setIsTimerActive] = useState(false);
  // State to track whether all questions have been answered
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  // State to track whether the quiz has started
  const [quizStarted, setQuizStarted] = useState(false);

  // Function to load questions (you'll replace this with your actual set of questions)
  const loadQuestions = () => {
    // Replace the following array with your set of questions
    const sampleQuestions = [
      'What is the purpose of your trip to the United States?',
      'Which university/college have you been accepted to or will be attending?',
      'What is your intended major/course of study?',
      'How did you hear about this university/college?',
      'Why did you choose this particular university/college?',
      'Do you have any relatives or friends in the United States?',
      'How will you finance your studies in the United States?',
      'Have you received any scholarships or financial aid?',
      'Can you provide the details of your academic background and qualifications?',
      'What do you plan to do after completing your studies in the United States?',
      'How do you intend to contribute to your home country after finishing your education?',
      'Do you have any prior experience in the field you intend to study?',
      'What are your plans for accommodation during your stay in the United States?',
      'How long do you plan to stay in the United States?',
      'Have you visited the United States before?',
      'What ties do you have to your home country that will ensure your return after your studies?',
      'Are you familiar with the cultural differences and lifestyle in the United States?',
      'How do you plan to cope with the challenges of studying in a foreign country?',
      'What do you know about the city/town where your university/college is located?',
      'Do you have any travel or medical insurance coverage for your stay in the United States?',
    ];
    
    
    setQuestions(sampleQuestions);
  };

  // Function to start the timer for each question
  const startTimer = () => {
    setTimer(15);
    setIsTimerActive(true);
  };

  // Function to handle the timer countdown
  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && isTimerActive) {
      setIsTimerActive(false);
      nextQuestion(); // Move to the next question after the timer runs out
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  // Function to handle moving to the next question or showing the "Thank you" message
  useEffect(() => {
    if (quizStarted && questions.length > 0 && currentQuestionIndex < questions.length) {
      startTimer();
    } else if (currentQuestionIndex === questions.length) {
      // All questions have been displayed, show "Thank you" message
      // You can customize this part with your own message or UI
      console.log('Thank you for answering all questions!');
      setIsTimerActive(false); // Stop the timer
      setAllQuestionsAnswered(true);
    }
  }, [quizStarted, currentQuestionIndex, questions]);

  // Function to handle moving to the next question
  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    startTimer(); // Start the timer again when moving to the next question manually
  };

  // Function to handle starting the quiz
  const startQuiz = () => {
    if (allQuestionsAnswered) {
      // If all questions are answered, restart the quiz
      setQuizStarted(true);
      setCurrentQuestionIndex(0);
      setAllQuestionsAnswered(false);
      setTimer(15);
      startTimer();
    } else {
      // If quiz is not started, start it
      setQuizStarted(true);
      setCurrentQuestionIndex(0);
      setAllQuestionsAnswered(false);
      startTimer();
    }
  };

  // Function to get the current question
  const getCurrentQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      return questions[currentQuestionIndex];
    }
    return null;
  };

  // Load questions when the component mounts
  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <div>
    {!quizStarted && (
      <button onClick={startQuiz} className="blue_btn" >Start Mock Test</button>
    )}
    {quizStarted && (
      <>
      <section className={`w-full flex-center flex-col glassmorphism text-center ${quizStarted && window.innerWidth <= 640 ? 'full-screen-mobile' : ''}`}>
        <h1 className="title_text">
          {allQuestionsAnswered ? (
            <>
              <span className="text-black">Good </span>
              <span className="blue_gradient text-center">Work</span>
            </>
          ) : (
            <>
              Begin the <span className="blue_gradient text-center">Mock Test</span>
            </>
          )}
        </h1>

        {/* Display the current question */}
        <h2 className={`questions ${questionTextClass} sm:${questionTextClass} md:${questionTextClass} lg:${questionTextClass} xl:${questionTextClass} 2xl:${mobileQuestionTextClass} my-5`}>{getCurrentQuestion()}</h2>
        {/* Display the timer or "Practice makes man perfect" */}
        {allQuestionsAnswered ? (
          <p className='text-2xl font-medium text-gray-700 mb-8'>The more you practice, <br /> the more prepared you will be for the real thing,<br />  and the better your chances of <br /> getting your F1 visa.</p>
        ) : (
          <p  className='time_remaining ' >Time Remaining: {timer}s</p>
        )}

        {/* Display either "Good Work" or "Next Question" button based on whether all questions are answered */}
        {allQuestionsAnswered ? (
          <button onClick={startQuiz} className='blue_btn'>Restart Mock Test</button>
        ) : (
          <button onClick={nextQuestion} className='blue_btn  my-5'>Next Question</button>
        )}
      </section>
      </>
    )}
  </div>
  );
};

export default RandomQuestionApp;
