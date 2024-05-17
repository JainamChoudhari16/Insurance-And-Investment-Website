import PartnerSection from "./Home/PartnerSection";
import Stats from "./Home/Stats";
import CalculatorSection from "./Home/CalculatorSection.jsx"
import WhyChooseUs from "./Home/WhyChooseUs";
import InsuranceServices from "./Home/InsuranceServices";
import Banner from "./Banner.jsx";

const Home = () => {
  return (
    <>
    <Banner/>
    <PartnerSection/>
    <WhyChooseUs/>
    <Stats/>
    <InsuranceServices/>
    <CalculatorSection/>
    </>
  );
};

export default Home;
