import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Insurances from "./components/services/Insurances.jsx";
import Calculators from "./components/services/Calculators.jsx";
import Contact from './components/Contact.jsx';
import SIPCalculator from './components/Calculators/SIPCalculator.jsx';
import RetirementCalculator from './components/Calculators/RetirementCalculator.jsx';
import SIPDelayCalculator from './components/Calculators/SIPDelayCalculator.jsx';
import ChildFutureCalculator from './components/Calculators/ChildFutureCalcualator.jsx';
import TaxCalculator from './components/Calculators/TaxCalculator.jsx';
import MortgageCalculator from './components/Calculators/MortgageCalculator.jsx';
import Partners from './components/Partners.jsx';
import LifeInsurance from './components/services/LifeInsurance.jsx';
import HealthInsurance from './components/services/HealthInsurance.jsx';
import HomeInsurance from './components/services/HomeInsurance.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import PrivacyPolicy from "./components/Footer/PrivacyPolicy.jsx";
import TermsConditions from './components/Footer/TermsConditions.jsx';
import GetPolicyLife from "./pages/GetPolicyLife.jsx";
import GetPolicyHealth from "./pages/GetPolicyHealth.jsx";
import GetPolicyHome from "./pages/GetPolicyHome.jsx";
import Endowment from "./components/services/Endowment.jsx";
import MoneyBack from "./components/services/MoneyBack.jsx";
import Whole from "./components/services/Whole.jsx";
import Investments from "./components/services/Investments.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AdminPrivateRoute from "./components/AdminPrivateRoute.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services/insurance" element={<Insurances />} />
      <Route path="services/investment" element={<Investments />} />
      <Route path='/endowment-plans' element={<Endowment />} />
      <Route path='/moneyback-plans' element={<MoneyBack />} />
      <Route path='/whole-plans' element={<Whole />} />
      <Route path="life" element={<LifeInsurance />} />
      <Route path="health" element={<HealthInsurance />} />
      <Route path="home" element={<HomeInsurance />} />
      <Route path="services/calculators" element={<Calculators />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/calculator/sip-calculator" element={<SIPCalculator />} />
      <Route path="/calculator/retirement-calculator" element={<RetirementCalculator />} />
      <Route path="/calculator/sip-delay-calculator" element={<SIPDelayCalculator />} />
      <Route path="/calculator/childfuture-calculator" element={<ChildFutureCalculator />} />
      <Route path="/calculator/tax-calculator" element={<TaxCalculator />} />
      <Route path="/calculator/mortgage-calculator" element={<MortgageCalculator />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/terms-conditions" element={<TermsConditions/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route element={<PrivateRoute/>} >
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/getPolicyLife" element={<GetPolicyLife />}/>
        <Route path="/getPolicyHealth" element={<GetPolicyHealth />}/>
        <Route path="/getPolicyHome" element={<GetPolicyHome />}/>

      </Route>
      <Route element={<AdminPrivateRoute/>} >
      </Route>

    </Route>
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;




