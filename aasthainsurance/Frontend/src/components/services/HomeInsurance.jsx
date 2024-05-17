import { useState} from "react";
import axios from "axios";

function HomeInsurance() {
  const api = "http://localhost:8080";
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

  const handleAddToCart = (policy) => {
    console.log("Added to cart:", policy);
  };
  return (
    <div className="flex p-8">
      {/* Filter Sidebar */}
      <div className="sidebar pr-8">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Gender</label>
          <select
            name="gender"

            className="w-full"
          >
            <option value="all">All</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Policy Term (in years)
          </label>
          <select
            name="policyTerm"
            className="w-full"
          >
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
          <select
            name="coverageAmount"
            className="w-full"
          >
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
          <select
            name="medicalTestRequired"
    
            className="w-full"
          >
            <option value="">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Smoking Status</label>
          <select
            name="smokingStatus"
            className="w-full"
          >
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
      <div className="grid grid-cols-1 gap-4 w-full">
        {data.map((policy) => (
          <div
            key={policy.id}
            className="bg-white shadow-md p-4 rounded-md flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold">{policy.company}</h2>
              <p className="text-sm">{policy.coverageAmount}</p>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleAddToCart(policy)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeInsurance;
