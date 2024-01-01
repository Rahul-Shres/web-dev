import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Message from './component/Message';

function App() {
  const [advice, setAdvice] = useState("")
  const [count, setCount] = useState(0);

  async function getAdvice() {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      console.log(data.slip.advice);
      setAdvice(data.slip.advice);
      setCount((c)=> c + 1);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  }

  useEffect(function(){
    getAdvice();
  }, []);
  

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div> 
  );
}

export default App;



