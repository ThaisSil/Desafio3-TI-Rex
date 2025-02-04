
import './global.css';
import { ReactDOM } from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  

  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  )
}

export default App
