import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminUsers = () => {
  const api = "http://localhost:8080";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${api}/user/all`);
        setData(res.data);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const res = await axios.delete(`${api}/user/delete/${userId}`);
      setData(res.data);
      setShowModal(false);
    } catch (error) {
      setError("Error deleting user");
      console.error("Error deleting user: ", error);
    }
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='px-10 py-4'>
      <div className="border overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Full Name</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">DOB</th>
              <th className="px-4 py-2 border-b">City</th>
              <th className="px-4 py-2 border-b">State</th>
              <th className="px-4 py-2 border-b">User Type</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.userId} className="hover:bg-gray-100 transition-colors duration-200">
                <td className="px-4 py-2 border-b">{user.userId}</td>
                <td className="px-4 py-2 border-b">{user.userName}</td>
                <td className="px-4 py-2 border-b">{user.phone}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
                <td className="px-4 py-2 border-b">{user.dob}</td>
                <td className="px-4 py-2 border-b">{user.city}</td>
                <td className="px-4 py-2 border-b">{user.state}</td>
                <td className="px-4 py-2 border-b">{user.roles[0].name}</td>
                <td className="px-4 py-2 border-b text-center">
                  {user.roles[0].name === "ROLE_USER" && (
                    <button
                    className="border-2 border-blue-500 p-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => openModal(user)}
                  >
                    Delete
                  </button>
                  )}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete the user <strong>{selectedUser.userName}</strong>?</p>
            <div className="mt-4">
              <button
                className="mr-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition-colors duration-200"
                onClick={() => handleDelete(selectedUser.userId)}
              >
                Yes, Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
