import { Link } from "react-router-dom";
// import logo from '../assets/images/logo.png';
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-textC">
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              {/* <img src={logo} className="mr-3 h-12" alt="Logo" /> */}
              <div>
                <h3 className="text-lg text-bodyC">
                  Aastha Insurance  &amp; Investments
                </h3>
                <p className="text-bodyC">
                  Solapur, Maharashtra <br />
                  <a href="tel:+9190XXXXXXXX" className="text-bodyC hover:text-headerC"> 📞 +9190XXXXXXXX</a> <br /> 
                  <a href="mailto:contact@aastha.com" className="text-bodyC hover:text-headerC"> ✉️ contact@aastha.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-bodyC uppercase">
                Resources
              </h2>
              <ul className="text-bodyC">
                <li className="mb-2">
                  <Link to="/" className="hover:text-headerC">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="about" className="hover:text-headerC">About</Link>
                </li>
                <li>
                  <Link to="/partners" className="hover:text-headerC">Partners</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-bodyC uppercase">
                Legal
              </h2>
              <ul className="text-bodyC">
                <li className="mb-2">
                  <Link to="/privacy-policy" className="hover:text-headerC">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="hover:text-headerC">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center md:flex-row md:justify-between">
          <span className="text-sm text-bodyC mb-2 md:mb-0">
            © Created for Aastha. All Rights Reserved.
          </span>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" className="text-bodyC hover:text-headerC text-xl">
              <FaFacebookF />
            </a>
            <a href="https://www.x.com/" className="text-bodyC hover:text-headerC text-xl">
              <FaTwitter />
            </a>
            <a href="mailto:contact@aastha.com" className="text-bodyC hover:text-headerC text-xl">
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}



