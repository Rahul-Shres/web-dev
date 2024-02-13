import { useState} from 'react';
import "./App.css";
const App = () => {
  //Define Initial state for the background color
  const [bgColor, setBgColor] = useState('#ffffff');

  // Function to generate a random gradient color
  const generateRandomColor = () => {
    // 16777215 is maximum possible RGB olor value in hexadecimal formal
    // toString method convert decimal vlue to a correspoonding hexadecimal string representation.
    // For ex : 10 = A
    const color1 = '#' + Math.floor(Math.random()* 16777215).toString(16);
    const color2 = '#' + Math.floor(Math.random()* 16777215).toString(16);
    const gradient = `linear-gradient(to right,${color1}, ${color2})`;
    return gradient;
  }

    //function to handle the botton click event
    const changeBackgroundColor = () => {
      const randomColor = generateRandomColor();
      setBgColor(randomColor);
    }

    return(
      <div className='App' style={{background: bgColor}}>
        <h1>Change Background Color</h1>
        <button onClick={changeBackgroundColor}> Change Color</button>
      </div>
    )
  
}

export default App;