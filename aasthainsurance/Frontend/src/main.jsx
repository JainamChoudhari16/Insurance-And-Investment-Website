import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {store, persistor} from './redux/store.js';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./Layout.jsx";
import Home from './components/Home.jsx'
import About from './components/About.jsx';
import Insurances from "./components/services/Insurances.jsx";
import Calculators from "./components/services/Calculators.jsx";
import Contact from './components/Contact.jsx'
import SIPCalculator from './components/Calculators/SIPCalculator.jsx';
import RetirementCalculator from './components/Calculators/RetirementCalculator.jsx';
import SIPDelayCalculator from './components/Calculators/SIPDelayCalculator.jsx';
import ChildFutureCalculator from './components/Calculators/ChildFutureCalcualator.jsx';
import TaxCalculator from './components/Calculators/TaxCalculator.jsx';
import MortgageCalculator from './components/Calculators/MortgageCalculator.jsx'
import Partners from './components/Partners.jsx';
import LifeInsurance from './components/services/LifeInsurance.jsx'
import HealthInsurance from './components/services/HealthInsurance.jsx'
import HomeInsurance from './components/services/HomeInsurance.jsx'
import AutoInsurance from './components/services/AutoInsurance.jsx'
import GeneralInsurance from './components/services/GeneralInsurance.jsx'
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx'
import PrivacyPolicy from "./components/Footer/PrivacyPolicy.jsx";
import TermsConditions from './components/Footer/TermsConditions.jsx';
import GetPolicy from './GetPolicy.jsx'
import AdminLogin from "./components/admin/AdminLogin.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services/insurance" element={<Insurances />} />
      <Route path="life" element={<LifeInsurance />} />
      <Route path="health" element={<HealthInsurance />} />
      <Route path="home" element={<HomeInsurance />} />
      <Route path="auto" element={<AutoInsurance />} />
      <Route path="general" element={<GeneralInsurance />} />
      <Route path="services/calculators" element={<Calculators />} />
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
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/terms-conditions" element={<TermsConditions/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route path="/getPolicy" element={<GetPolicy />} />
      <Route path='/admin' element = {<AdminLogin/>} />
      <Route path='/admin/dashboard' element = {<Dashboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </PersistGate>
  
);

