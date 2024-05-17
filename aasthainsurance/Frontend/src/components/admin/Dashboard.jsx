import { useState, useEffect } from 'react';

function InsuranceManagement() {
  const [insurances, setInsurances] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newInsurance, setNewInsurance] = useState({
    name: '',
    coverage: '',
    premium: ''
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch insurances from the backend when the component mounts
    fetchInsurances();
    // Fetch users from the backend when the component mounts
    fetchUsers();
  }, []);

  const fetchInsurances = async () => {
    // Dummy fetchInsurances function
  };

  const fetchUsers = async () => {
    // Dummy fetchUsers function
    // Simulating dummy user data
    const dummyUsers = [
      {
        id: 1,
        userName: 'john_doe',
        password: 'password123',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        dob: '1990-01-01',
        city: 'New York',
        state: 'NY'
      },
      {
        id: 2,
        userName: 'jane_smith',
        password: 'password456',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        dob: '1985-05-15',
        city: 'Los Angeles',
        state: 'CA'
      }
    ];
    setUsers(dummyUsers);
  };

  const handleAddInsuranceClick = () => {
    setShowAddForm(true);
  };

  const handleEditInsurance = async (insuranceId) => {
    // Implement logic to edit insurance
    // You can open a modal with pre-filled form fields for editing
  };

  const handleDeleteInsurance = async (insuranceId) => {
    // Dummy handleDeleteInsurance function
  };

  const handleAddInsuranceSubmit = async (event) => {
    // Dummy handleAddInsuranceSubmit function
  };

  const handleChange = (event) => {
    // Dummy handleChange function
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-200 w-1/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <ul>
          <li className="cursor-pointer" onClick={() => setShowAddForm(false)}>Users</li>
          <li className="cursor-pointer" onClick={() => setShowAddForm(true)}>Insurances</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {showAddForm && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Insurance Management</h2>
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddInsuranceClick}>Add Insurance</button>
            </div>
            {showAddForm && (
              <form onSubmit={handleAddInsuranceSubmit}>
                <input className="border rounded py-2 px-3 mb-2" type="text" name="name" placeholder="Name" value={newInsurance.name} onChange={handleChange} />
                <input className="border rounded py-2 px-3 mb-2" type="text" name="coverage" placeholder="Coverage" value={newInsurance.coverage} onChange={handleChange} />
                <input className="border rounded py-2 px-3 mb-2" type="text" name="premium" placeholder="Premium" value={newInsurance.premium} onChange={handleChange} />
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Add</button>
              </form>
            )}
            {/* Render list of insurances */}
            <ul>
              {insurances.map(insurance => (
                <li key={insurance.id} className="mb-2">
                  {insurance.name} - {insurance.coverage} - {insurance.premium}
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded ml-2" onClick={() => handleEditInsurance(insurance.id)}>Edit</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2" onClick={() => handleDeleteInsurance(insurance.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!showAddForm && (
          <div>
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            {/* Render users in table format */}
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">Username</th>
                  <th className="border border-gray-400 px-4 py-2">Password</th>
                  <th className="border border-gray-400 px-4 py-2">Email</th>
                  <th className="border border-gray-400 px-4 py-2">Phone</th>
                  <th className="border border-gray-400 px-4 py-2">Date of Birth</th>
                  <th className="border border-gray-400 px-4 py-2">City</th>
                  <th className="border border-gray-400 px-4 py-2">State</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="border border-gray-400 px-4 py-2">{user.userName}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.password}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.phone}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.dob}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.city}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default InsuranceManagement;
