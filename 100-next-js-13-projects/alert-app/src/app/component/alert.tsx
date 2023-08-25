"use client";
import React, { useState, useEffect } from 'react';
interface AlertProps {
  type: 'red' | 'yellow' | 'green';
  message: string;
  delay?: boolean;
  delayTime?: number;
}

const Alert: React.FC<AlertProps> = ({ type, message, delay, delayTime}) => {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false);
  }
  
//delay not working

  useEffect(() => {
    if (delay) {
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, delayTime);

      return () => clearTimeout(timeoutId);
    }
  }, [delay, delayTime]);

  return (
    showAlert && (
      <div className={`alert-${type} bg-opacity-80 py-2 px-4 rounded-md border-2 border-${type}-500`}>
        <div className={`text-${type}-700`}>{message}</div>
        <button className={`text-${type}-700 ml-2`} onClick={closeAlert}>
          Close
        </button>
      </div>
    )
  );
}

export default Alert;
