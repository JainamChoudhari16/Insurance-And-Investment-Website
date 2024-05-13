import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Products from "./components/Products/Products.jsx";
import SIPCalculator from "./components/Features/Calculators/SIPCalculator.jsx";
import RetirementCalculator from "./components/Features/Calculators/RetirementCalculator.jsx";
import MutualFunds from "./components/Products/MutualFunds.jsx";
import PlansSection from "./components/Products/PlansSection.jsx";
import CalculatorsAll from "./components/Products/CalculatorsAll.jsx";
import BuyPolicy from "./temp/BuyPolicy.jsx";
import SIPDelayCalculator from "./components/Features/Calculators/SIPDelayCalculator.jsx";
import ChildFutureCalculator from "./components/Features/Calculators/ChildFutureCalcualator.jsx";
import TaxCalculator from "./components/Features/Calculators/TaxCalculator.jsx";
import MortgageCalculator from "./components/Features/Calculators/MortgageCalculator.jsx";
import Partners from "./components/Footer/Partners.jsx";
import Life from "./components/Products/Life.jsx";
import PlansName from "./components/Products/PlansName.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/insurance" element={<Products />} />
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
      <Route path="/products/plans" element={<PlansSection />} />
      <Route path="/products/mutualfunds" element={<MutualFunds />} />
      <Route path="/products/all-calculators" element={<CalculatorsAll />} />
      <Route path="/buypolicy" element={<BuyPolicy />} />
      <Route path="/products/life" element={<Life />} />
      <Route path="plans/planName" element={<PlansName />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
