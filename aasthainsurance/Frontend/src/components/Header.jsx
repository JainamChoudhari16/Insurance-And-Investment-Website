import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from '../assets/images/logo.png';
import { useSelector, useDispatch } from "react-redux";
import {Dropdown, Button, Avatar, DropdownDivider} from 'flowbite-react';
import { signoutSuccess } from "../redux/user/userSlice";
export default function Header() {
  const api = "http://localhost:8080";
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {currentUser} = useSelector((state) => state.user);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSignOut = async () => {
    try {
      const res = await fetch(`${api}/auth/logout`, {
        method: 'POST',
      });
      const data = await res.json();
      console.log(data)
      if (!res.ok) {
        console.log(data.message);
        console.log("Logout failed");
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <header className="bg-headerC p-4 h-1/5">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* <Link to="/">
            <img src={logo} alt="Logo" className="w-16 h-16" />
          </Link> */}

          <h2 className="text-textC text-3xl font-bold">
            Aastha Insurance & Investment
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-textC" onClick={closeDropdown}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-textC" onClick={closeDropdown}>About</Link>
            </li>
            <li className="relative">
              <button className="text-textC" onClick={toggleDropdown}>Services</button>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 bg-headerC p-2 z-10"> 
                  <li>
                    <Link to="services/insurance" className="text-textC" onClick={closeDropdown}>Insurance</Link>
                  </li>
                  <li>
                    <Link to="services/investment" className="text-textC" onClick={closeDropdown}>Investment</Link>
                  </li>
                  <li>
                    <Link to="services/calculators" className="text-textC" onClick={closeDropdown}>Calculators</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" className="text-textC" onClick={closeDropdown}>Contact</Link>
            </li>
          </ul>
            {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="user" rounded/>}
            >
              <Dropdown.Header> 
                <span className="block text-sm">@{currentUser.userName}</span>
                <span className="block text-sm font-medium truncate">{currentUser.email}</span>
              </Dropdown.Header>
              <Link to={'/dashboard?tab=profile'} className="text-textC"><Dropdown.Item>Profile</Dropdown.Item></Link> 
              <DropdownDivider/>
              <Dropdown.Item onClick={handleSignOut}>Logout</Dropdown.Item>
            </Dropdown>):  (<Link to="/login" >
              <Button gradientDuoTone='purpleToBlue' outline>
                  Sign In
              </Button>
            </Link>)}
        </div>
      </nav>
    </header>
  );
}


