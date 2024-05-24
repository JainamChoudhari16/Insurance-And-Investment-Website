import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function HealthInsurance() {
  const api = "http://localhost:8080";
  const {currentUser} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [policyTerm, setPolicyTerm] = useState([]);
  const [coverageAmount, setCoverageAmount] = useState([]);
  const [chronic, setChronic] = useState([]);
  const [gender, setGender] = useState([]);
  const [age, setAge] = useState([]);
  const [error, setError] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams({
          policyTerm,
          coverageAmount,
          chronic,
          gender,
          age,
        }).toString();

        const response = await axios.get(`${api}/insurance/health/filter?${queryParams}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [policyTerm, coverageAmount, chronic, gender, age]);

  const handleGetPolicy = (policy) => {
    console.log("Added to cart:", policy);
    if(currentUser !== null) {
    navigate('/getPolicy', { state: { policy, insuranceType : 'HEALTH', fullName : currentUser.userName } });
    }else{
      navigate('/login');
    }
    };


  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value >= 18 && value <= 60) {
      setAge(value);
      setError('');
    } else {
      setAge(0);
      setError('Age must be between 18 and 60.');
    }
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setAnimationClass('animate-input-change');
    setTimeout(() => setAnimationClass(''), 500);
  };

  return (
    <div className="flex p-8">
      <div className="sidebar pr-8">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Gender</label>
          <select
            onChange={e => { setGender(e.target.value); triggerAnimation(); }}
            name="gender"
            className={`w-full ${animationClass} transition-colors duration-500`}
          >
            <option value="all">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Age</label>
          <input
            type="number"
            name="age"
            className={`w-full ${animationClass} transition-colors duration-500`}
            onChange={handleAgeChange}
            placeholder="Enter Age"
            min="18"
            max="60"
            required
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Policy Term (in years)</label>
          <select
            onChange={e => { setPolicyTerm(e.target.value); triggerAnimation(); }}
            name="policyTerm"
            className={`w-full ${animationClass} transition-colors duration-500`}
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
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Coverage Amount (in lakhs)</label>
          <select
            onChange={e => { setCoverageAmount(e.target.value); triggerAnimation(); }}
            name="coverageAmount"
            className={`w-full ${animationClass} transition-colors duration-500`}
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

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Chronic Disease</label>
          <select
            onChange={e => { setChronic(e.target.value); triggerAnimation(); }}
            name="chronic"
            className={`w-full ${animationClass} transition-colors duration-500`}
          >
            <option value="all">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="text-center"></div>
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
                  <span className="font-semibold text-gray-700">Coverage Amount</span>
                  <div className="text-gray-800">{policy.coverageAmount}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Policy Term</span>
                  <div className="text-gray-800">{policy.policyTerm}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Chronic Test</span>
                  <div className="text-gray-800">{policy.chronicDisease}</div>
                </div>
                <div className="text-sm border p-2 rounded-md bg-gray-50">
                  <span className="font-semibold text-gray-700">Gender</span>
                  <div className="text-gray-800">{policy.gender}</div>
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

export default HealthInsurance;
