
import './global.css';
import Header from './components/Header';
import { ReactDOM } from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';


function App() {
  

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

export default App
