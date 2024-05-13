import PartnerSection from "./PartnerSection";
import Stats from "./Stats";
import CalculatorSection from "./CalculatorSection";
import WhyChooseUs from "./WhyChooseUs";
import InsuranceServices from "./InsuranceServices";
import { useState, useEffect } from 'react';
import banner from '../Images/backBanner.png';
import { Link } from "react-router-dom";

const Home = () => {
  const [welcomeTextIndex, setWelcomeTextIndex] = useState(0);
  const welcomeTexts = [
    "Welcome to Our Website",
    "Explore Our Services",
    "Secure Your Future Today"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeTextIndex((prevIndex) => (prevIndex + 1) % welcomeTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [welcomeTexts.length]);

  return (
    <div>
    <div className="bg-bodyC">
      <div className="relative">
        <img src={banner} alt="Banner" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 z-0 bg-cover bg-center blur-90" style={{ 
          backgroundImage: `url(${banner})`,
        }}></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center bg-opacity-50 backdrop-blur-sm text-textC  rounded-lg">
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
    <PartnerSection/>
    <WhyChooseUs/>
    <Stats/>
    <InsuranceServices/>
    <CalculatorSection/>
    </div>
  );
};

export default Home;
