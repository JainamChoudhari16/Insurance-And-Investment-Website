import PartnerSection from "./Home/PartnerSection";
import Stats from "./Home/Stats";
import CalculatorSection from "./Home/CalculatorSection.jsx"
import WhyChooseUs from "./Home/WhyChooseUs";
import InsuranceServices from "./Home/InsuranceServices";
import Banner from "./Banner.jsx";
import BackToTopButton from "./Home/BackToTop.jsx";
import Contact from './Contact.jsx';
const Home = () => {
  return (
    <>
    <Banner/>
    <PartnerSection/>
    <WhyChooseUs/>
    <Stats/>
    <InsuranceServices/>
    <CalculatorSection/>
    <Contact/>
    <BackToTopButton/>
    </>
  );
};

export default Home;




