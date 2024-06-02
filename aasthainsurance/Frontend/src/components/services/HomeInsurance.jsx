import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function HomeInsurance() {
  const api = "http://localhost:8080";
  const {currentUser} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [policyTerm, setPolicyTerm] = useState([]);
  const [householdItemsValue, setHouseholdItemsValue] = useState([]);
  const [houseValue, sethouseValue] = useState([]);
  const [houseAge, sethouseAge] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams({
          policyTerm,
          householdItemsValue,
          houseValue,
          houseAge,
        }).toString();

        const response = await axios.get(`${api}/insurance/home/filter?${queryParams}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [policyTerm, householdItemsValue, houseValue, houseAge]);

  const handleGetPolicy = (policy) => {
    console.log("Added to cart:", policy);
    if(currentUser !== null) {
    navigate('/getPolicyHome', { state: { policy, insuranceType : 'HOME', fullName : currentUser.userName } });
    }else{
      navigate('/login');
    }
    };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value >= 1 && value <= 35) {
      sethouseAge(value);
      setError('');
    } else {
      sethouseAge(1);
      setError('Home Age must be between 1 and 35.');
    }
  };

  return (
    <div className="flex p-8">
      <div className="sidebar pr-8">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Home Age</label>
          <input
            type="number"
            name="houseAge"
            onChange={handleAgeChange}
            placeholder="Enter House Age"
            min="1"
            max="35"
            required
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Policy Term (in years)</label>
          <select
            onChange={e => { setPolicyTerm(e.target.value) }}
            name="policyTerm"
          >
            <option value="">All</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">House Value</label>
          <select
            onChange={e => { sethouseValue(e.target.value) }}
            name="houseValue"
          >
            <option value="">All</option>
            <option value={3000000}>30,00,000</option>
            <option value={4000000}>40,00,000</option>
            <option value={5000000}>50,00,000</option>
            <option value={6000000}>60,00,000</option>
            <option value={7000000}>70,00,000</option>
            <option value={8000000}>80,00,000</option>
            <option value={9000000}>90,00,000</option>
            <option value={10000000}>1,00,00,000</option>
            <option value={11000000}>1,10,00,000</option>
            <option value={12000000}>1,20,00,000</option>
            <option value={13000000}>1,30,00,000</option>
            <option value={14000000}>1,40,00,000</option>
            <option value={15000000}>1,50,00,000</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Household Items Value</label>
          <select
            onChange={e => { setHouseholdItemsValue(e.target.value) }}
            name="householdItemsValue"
          >
            <option value="">All</option>
            <option value={300000}>3,00,000</option>
            <option value={400000}>4,00,000</option>
            <option value={500000}>5,00,000</option>
            <option value={600000}>6,00,000</option>
            <option value={700000}>7,00,000</option>
            <option value={800000}>8,00,000</option>
            <option value={900000}>9,00,000</option>
            <option value={1000000}>10,00,000</option>
            <option value={1100000}>11,00,000</option>
            <option value={1200000}>12,00,000</option>
            <option value={1300000}>13,00,000</option>
            <option value={1400000}>14,00,000</option>
            <option value={1500000}>15,00,000</option>
          </select>
        </div>

      </div>

      {/* Policies */}
      <div className="grid grid-cols-1 gap-6 w-full text-textC">
        {data.map((policy) => (
          <div
            key={policy.id}
            className="bg-headerC shadow-md p-4 rounded-lg flex flex-col lg:flex-row items-stretch lg:items-center justify-between hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-grow">
              <div className="text-gray-900 font-bold text-xl mb-4">{policy.company}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Policy Term</span>
                  <div className="text-gray-800">{policy.policyTerm}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">House Value</span>
                  <div className="text-gray-800">{policy.houseValue}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">House Hold Items Value</span>
                  <div className="text-gray-800">{policy.householdItemsValue}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Premium</span>
                  <div className="text-gray-800">{policy.premium}</div>
                </div>
              </div>
              <div className="text-sm border p-3 rounded-md bg-gray-50">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-semibold text-gray-700">Financial Security for Dependents</span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-700">Peace of Mind and Long-Term Planning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 lg:mt-0 lg:ml-4 flex justify-center items-center">
              <button
                className="text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out bg-textC hover:bg-footerC"
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

export default HomeInsurance;
