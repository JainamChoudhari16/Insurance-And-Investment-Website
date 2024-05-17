import { useState } from 'react';

function AgentRegistrationForm() {
  const [agent, setAgent] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
    // Add more fields as needed
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgent({ ...agent, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dummy user data for testing
      const dummyUserData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        password: 'password123'
        // Add more fields as needed
      };
      
      console.log('Dummy User Data:', dummyUserData);

      // Reset the form after successful submission
      setAgent({
        name: '',
        email: '',
        phone: '',
        password: ''
        // Add more fields as needed
      });

      setSuccessMessage('Agent registered successfully!');
    } catch (error) {
      console.error('Error registering agent:', error.message);
      setSuccessMessage('');
      alert('Failed to register agent. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Agent Registration</h2>
      {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={agent.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={agent.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={agent.phone}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={agent.password}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        {/* Add more fields as needed */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
}

export default AgentRegistrationForm;
