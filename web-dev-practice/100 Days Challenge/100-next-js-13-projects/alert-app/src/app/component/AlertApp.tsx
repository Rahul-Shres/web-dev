import React from 'react';
import Alert from './alert';
const AlertApp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Alert type="green" message="This is a success message" delay={true} delayTime={5000} />
      <Alert type="yellow" message="This is a warning message" delay={true} delayTime={5000} />
      <Alert type="red" message="This is an error message" delay={true} delayTime={5000}/>
    </div>
  );
}

export default AlertApp;
