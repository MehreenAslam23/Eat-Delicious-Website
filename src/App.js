import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/heroSection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      </BrowserRouter>
      <HeroSection></HeroSection>
    </div>
  );
}

export default App;
