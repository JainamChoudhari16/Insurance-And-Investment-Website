import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LifeInsurance() {
  const api = "http://localhost:8080";
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleViewClick = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}/insurance/life/filter`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  };

  const handleGetPolicy = (policy) => {
    console.log("Added to cart:", policy);
    navigate('/getPolicy', { state: { policy } });
  };

  return (
    <div className="flex p-8">
      {/* Filter Sidebar */}
      <div className="sidebar pr-8">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Gender</label>
          <select name="gender" className="w-full">
            <option value="all">All</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Policy Term (in years)
          </label>
          <select name="policyTerm" className="w-full">
            <option value="">All</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
            <option value={60}>60</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Coverage Amount (in lakhs)
          </label>
          <select name="coverageAmount" className="w-full">
            <option value="">All</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="125">125</option>
            <option value="150">150</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Medical Test Required
          </label>
          <select name="medicalTestRequired" className="w-full">
            <option value="">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Smoking Status</label>
          <select name="smokingStatus" className="w-full">
            <option value="">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleViewClick}
          >
            View Policies
          </button>
        </div>
      </div>
      {/* Policies */}
      <div className="grid grid-cols-1 gap-6 w-full">
        {data.map((policy) => (
          <div
            key={policy.id}
            className="bg-white shadow-md p-4 rounded-lg flex flex-col lg:flex-row items-stretch lg:items-center justify-between hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-grow">
              <div className="text-gray-900 font-bold text-xl mb-4">{policy.company}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Coverage Amount</span>
                  <div className="text-gray-800">{policy.coverageAmount}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Policy Term</span>
                  <div className="text-gray-800">{policy.policyTerm}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Medical Test</span>
                  <div className="text-gray-800">{policy.medicalTest}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Smoker Status</span>
                  <div className="text-gray-800">{policy.smokerStatus}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Gender</span>
                  <div className="text-gray-800">{policy.gender}</div>
                </div>
              </div>
              <div className="text-sm border p-3 rounded-md bg-gray-50">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-semibold text-gray-700">Benefit 1 - </span>
                    <span className="text-gray-800">This is Benefit 1</span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-700">Benefit 2 - </span>
                    <span className="text-gray-800">This is Benefit 2</span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-700">Benefit 3 - </span>
                    <span className="text-gray-800">This is Benefit 3</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 lg:mt-0 lg:ml-4 flex justify-center items-center">
              <button
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => handleGetPolicy(policy)}
              >
                Get Policy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LifeInsurance;
