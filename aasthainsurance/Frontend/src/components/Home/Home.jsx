import { Link } from "react-router-dom";
import PartnerSection from "./PartnerSection";
import Stats from "./Stats";
import CalculatorSection from "./CalculatorSection";
import WhyChooseUs from "./WhyChooseUs";
import InsuranceServices from "./InsuranceServices";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl relative">
      <div className="max-w-screen-xl px-4 py-10 sm:py-12 mx-auto sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="max-w-sm sm:w-1/2">
          <img
            className="max-w-full h-auto transition duration-500 ease-in-out rounded-md "
            src="https://img.freepik.com/free-vector/family-protection-concept-illustration_114360-21637.jpg?t=st=1709470242~exp=1709473842~hmac=9cdbae784530ac3268092768d8ec13f9af2fbf3ea796fa5813c4e3fc85543795&w=740"
            alt="Family Protection"
          />
        </div>
        <div className="max-w-xl space-y-8 text-center sm:text-left sm:mr-8">
          <h2 className="text-xl font-bold sm:text-3xl transition duration-500 ease-in-out transform hover:scale-105">
            Insurance for your better family life!! <br />{" "}
            <i> &quot;Insure your life with us&quot;</i>
          </h2>
          <div className="flex justify-center sm:justify-center">
            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1"
              to="/about"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <PartnerSection />

      <WhyChooseUs />

      <Stats />

      <InsuranceServices />

      <CalculatorSection />
    </div>
  );
}
