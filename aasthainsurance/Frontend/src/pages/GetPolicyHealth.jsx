import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function GetPolicyHealth() {
  const {currentuser} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const { policy, insuranceType, fullName } = location.state || {};
  const [name, setName] = useState(fullName || "");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const key = localStorage.getItem('authToken');
    try {
      const response = await axios.get(`http://localhost:8080/insurance/health/quote/${policy.id}`, {
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Basic ${key}`
          }
      });
  
     
  
      if (response.status === 200) {  // Check the correct status code for a successful request
          
          console.log("Submission successful:", response.data);
          navigate('/health')
      } else {
          alert("Submission failed");
      }
  } catch (error) {
      console.error("Error submitting policy:", error);
  }
  
  
};

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-wrap -mx-4 mb-6">
        <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            readOnly
            className="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2">Insurance Type</label>
          <input 
            type="text" 
            value={insuranceType} 
            readOnly 
            className="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 mb-6">
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2">Coverage Amount</label>
          <input 
            type="text" 
            value={policy.coverageAmount || (Number(policy.householdItemsValue) + Number(policy.houseValue))} 
            readOnly 
            className="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2">Policy Term (years)</label>
          <input 
            type="text" 
            value={policy.policyTerm} 
            readOnly 
            className="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2">Premium (per month)</label>
          <input 
            type="text" 
            value={policy.premium} 
            readOnly 
            className="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-start">
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Get Quote
        </button>
      </div>
    </form>
  );
}

export default GetPolicyHealth;
