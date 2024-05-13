import { useState } from 'react';
import axios from 'axios';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('backend/forgot-password', { email });
            setSuccessMessage(response.data.message);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage(error.response.data.message);
            setSuccessMessage('');
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 md:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white mb-4">
                    Forgot Password
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" value={email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    {successMessage && <p className="text-green-500 text-sm italic">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 text-sm italic">{errorMessage}</p>}
                    <button type="submit" className={`text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        {isLoading ? 'Submitting...' : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgetPassword;
