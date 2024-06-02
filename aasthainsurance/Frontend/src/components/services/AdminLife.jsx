import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

function Adminlife() {
  const api = "http://localhost:8080";
  const [data, setData] = useState([]);
  const [com , setcom] = useState("all")
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [formValues, setFormValues] = useState({
    company: "",
    coverageAmount: "",
    policyTerm: "",
    medicalTest: "",
    smokerStatus: "",
    gender: "",
    premium: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${api}/api/insurance/life/get`);
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${api}/api/insurance/life/filter/${com}`);
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [com]);

  const handleEditClick = (policy) => {
    console.log("Editing policy:", policy);
    setSelectedPolicy(policy);
    setFormValues(policy);
    setShowEditModal(true);
  };

  const handleAddClick = () => {
    setShowAddModal(true);
    setFormValues({
      company: "",
      coverageAmount: "5000000",
      policyTerm: "10",
      medicalTest: "No",
      smokerStatus: "NO",
      gender: "Male",
      premium: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDeleteClick = (policy) => {
    setSelectedPolicy(policy);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
  try {
    const res = await axios.delete(
      `${api}/api/insurance/life/delete/${selectedPolicy.id}`
    );
    setData(data.filter(policy => policy.id !== selectedPolicy.id));
    setShowDeleteModal(false);
  } catch (error) {
    console.error("Error deleting policy: ", error);
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${api}/api/insurance/life/update`,
        formValues,
        { params: { id: selectedPolicy.id } }
      );
      setData(res.data);
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating policy: ", error);
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/api/insurance/life/add`, formValues);
      setData((prevData) => [...prevData, res.data]);
      setShowAddModal(false);
    } catch (error) {
      console.error("Error adding policy: ", error);
    }
  };



  return (
    <div>
      <div className="px-12 py-2">
        <button
          onClick={handleAddClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Policy
        </button>
      </div>
      <div className="px-12 py-2">
       <select name="company" onChange={(e)=>
        {
          setcom(e.target.value)
        }
       }>
        <option value="all">ALL</option>
        <option value="HDFC ERGO">HDFC ERGO</option>
        <option value="LIC">LIC</option>
        <option value="Oriental Insurance">Oriental Insurance</option>
        <option value="ICICI Lombard">ICICI Lombard</option>
        <option value="TATA AIA">TATA AIA</option>
        <option value="STAR Insurance">STAR Insurance</option>
       </select>
      </div>

      <div className="overflow-x-auto px-12">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Company</th>
              <th className="px-4 py-2 border-b">Coverage Amount</th>
              <th className="px-4 py-2 border-b">Policy Term</th>
              <th className="px-4 py-2 border-b">Medical Test</th>
              <th className="px-4 py-2 border-b">Smoker Status</th>
              <th className="px-4 py-2 border-b">Gender</th>
              <th className="px-4 py-2 border-b">Premium</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((policy) => (
              <tr
                key={policy.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-4 py-2 border-b">{policy.company}</td>
                <td className="px-4 py-2 border-b">{policy.coverageAmount}</td>
                <td className="px-4 py-2 border-b">{policy.policyTerm}</td>
                <td className="px-4 py-2 border-b">{policy.medicalTest}</td>
                <td className="px-4 py-2 border-b">{policy.smokerStatus}</td>
                <td className="px-4 py-2 border-b">{policy.gender}</td>
                <td className="px-4 py-2 border-b">{policy.premium}</td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    className="hover:bg-yellow-200 p-2 rounded-full transition-colors duration-200"
                    onClick={() => handleEditClick(policy)}
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    className="hover:bg-red-500 p-2 rounded-full transition-colors duration-200"
                    onClick={() => handleDeleteClick(policy)}
                  >
                    <AiTwotoneDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Policy</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formValues.company}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Coverage Amount
                  </label>
                  <input
                    type="text"
                    name="coverageAmount"
                    value={formValues.coverageAmount}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Policy Term
                  </label>
                  <input
                    type="text"
                    name="policyTerm"
                    value={formValues.policyTerm}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Medical Test
                  </label>
                  <input
                    type="text"
                    name="medicalTest"
                    value={formValues.medicalTest}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Smoker Status
                  </label>
                  <input
                    type="text"
                    name="smokerStatus"
                    value={formValues.smokerStatus}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Gender
                  </label>
                  <input
                    type="text"
                    name="gender"
                    value={formValues.gender}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Premium
                  </label>
                  <input
                    type="text"
                    name="premium"
                    value={formValues.premium}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="mr-2 border-2 border-blue-500 p-1 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border-2 border-blue-500 p-1 rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add Policy</h2>
            <form onSubmit={handleAddSubmit}>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formValues.company}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Coverage Amount (in lakhs)
                  </label>
                  <select
                    name="coverageAmount"
                    value={formValues.coverageAmount}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  >
                    <option value="5000000">50,00,000</option>
                    <option value="7500000">75,00,000</option>
                    <option value="10000000">1,00,00,000</option>
                    <option value="12500000">1,25,00,000</option>
                    <option value="15000000">1,50,00,000</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Policy Term (in years)
                  </label>
                  <select
                    name="policyTerm"
                    value={formValues.policyTerm}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                    <option value={60}>60</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Medical Test Required
                  </label>
                  <select
                    name="medicalTest"
                    value={formValues.medicalTest}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Smoker Status
                  </label>
                  <select
                    name="smokerStatus"
                    value={formValues.smokerStatus}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  >
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formValues.gender}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-semibold text-gray-700 mr-2">
                    Premium
                  </label>
                  <input
                    type="text"
                    name="premium"
                    value={formValues.premium}
                    onChange={handleChange}
                    className="block w-2/3 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="mr-2 border-2 border-blue-500 p-1 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border-2 border-blue-500 p-1 rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Delete Policy</h2>
            <p>Are you sure you want to delete the policy {selectedPolicy.company}?</p>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="mr-2 border-2 border-blue-500 p-1 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="border-2 border-red-500 p-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Adminlife;
