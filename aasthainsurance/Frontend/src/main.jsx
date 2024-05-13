import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Insurances from "./components/services/Insurances.jsx";
import FinConsultancy from "./components/services/FinConsultancy.jsx";
import Calculators from "./components/services/Calculators.jsx";
import Investments from "./components/services/Investments.jsx";
import Contact from "./components/Contact/Contact.jsx";
import SIPCalculator from "./components/Features/Calculators/SIPCalculator.jsx";
import RetirementCalculator from "./components/Features/Calculators/RetirementCalculator.jsx";
import SIPDelayCalculator from "./components/Features/Calculators/SIPDelayCalculator.jsx";
import ChildFutureCalculator from "./components/Features/Calculators/ChildFutureCalcualator.jsx";
import TaxCalculator from "./components/Features/Calculators/TaxCalculator.jsx";
import MortgageCalculator from "./components/Features/Calculators/MortgageCalculator.jsx";
import Partners from "./components/Footer/Partners.jsx";
import Life from "./components/services/Life.jsx";
import PlansName from "./components/services/PlansName.jsx";
import RegistrationForm from "./temp/RegistrationForm.jsx";
import LoginUser from "./temp/LoginUser.jsx";
import ForgetPassword from "./temp/ForgetPassword.jsx";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy.jsx";
import TermsConditions from './components/Footer/TermsConditions.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services/insurance" element={<Insurances />} />
      <Route path="life" element={<Life />} />
      <Route path="services/investment" element={<Investments />} />
      <Route path="services/calculators" element={<Calculators />} />
      <Route path="services/finConsultation" element={<FinConsultancy />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/calculator/sip-calculator" element={<SIPCalculator />} />
      <Route
        path="/calculator/retirement-calculator"
        element={<RetirementCalculator />}
      />
      <Route
        path="/calculator/sip-delay-calculator"
        element={<SIPDelayCalculator />}
      />
      <Route
        path="/calculator/childfuture-calculator"
        element={<ChildFutureCalculator />}
      />
      <Route path="/calculator/tax-calculator" element={<TaxCalculator />} />
      <Route
        path="/calculator/mortgage-calculator"
        element={<MortgageCalculator />}
      />
      <Route path="plans/planName" element={<PlansName />} />
      <Route path="/userRegistration" element={<RegistrationForm/>}/>
      <Route path="/userLogin" element={<LoginUser/>}/>
      <Route path="/forgetPassword" element={<ForgetPassword/>}/>
      <Route path="/terms-conditions" element={<TermsConditions/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
