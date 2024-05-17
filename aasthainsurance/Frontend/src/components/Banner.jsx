import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import banner from '../assets/images/backBanner.png';
const Banner = () => {
    const [welcomeTextIndex, setWelcomeTextIndex] = useState(0);
    const welcomeTexts = [
    "Welcome to Aastha",
    "Explore Our Services",
    "Secure Your Future Today",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeTextIndex((prevIndex) => (prevIndex + 1) % welcomeTexts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [welcomeTexts.length]);
  return (
    <div className="bg-bodyC">
      <div className="relative">
        <img src={banner} alt="Banner" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 z-0 bg-cover bg-center blur-50" style={{ 
          backgroundImage: `url(${banner})`,
        }}></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center bg-opacity-40 backdrop-blur-sm text-textC  rounded-lg">
            <h1 className="text-4xl font-bold text-black mb-8">
              {welcomeTexts[welcomeTextIndex]}
              <span className="text-black animate-pulse">|</span>
            </h1>
            <p className="text-lg text-black mb-8">We provide comprehensive insurance and investment solutions to secure your future.</p>
            <Link to='/about' className="text-textC bg-headerC py-2 px-6 rounded-full font-semibold hover:bg-bodyC transition duration-300">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
