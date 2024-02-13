import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateBlog from './pages/createBlog';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/createBlog" element={<CreateBlog/>}/>
     </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;
