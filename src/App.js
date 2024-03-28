import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/heroSection';
import LogoSlider from './Components/logoSlider';
import AboutTwo from './Components/aboutTwo';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      </BrowserRouter>
      <HeroSection></HeroSection>
      <LogoSlider></LogoSlider>
      <About></About>
      <AboutTwo></AboutTwo>
    </div>
  );
}

export default App;
