import { useState } from 'react';


function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNo: '',
        dob: '',
        password: '',
        city: '',
        state: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                console.log("Submitted");

            } catch (error) {
                console.error("Error submitting form:", error.response.data);
                setErrorMessage("An error occurred while submitting the form. Please try again later.");
            }
            setIsLoading(false);
        }
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};
    
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required";
            valid = false;
        }
    
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
            newErrors.email = "Email is invalid";
            valid = false;
        }
    
        if (!formData.phoneNo.trim()) {
            newErrors.phoneNo = "Phone No. is required";
            valid = false;
        } else if (!/^\d{10}$/.test(formData.phoneNo.trim())) {
            newErrors.phoneNo = "Phone No. must be 10 digits";
            valid = false;
        }
    
        if (!formData.dob.trim()) {
            newErrors.dob = "Date of Birth is required";
            valid = false;
        }
    
        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
            valid = false;
        }
    
        if (!formData.city.trim()) {
            newErrors.city = "City is required";
            valid = false;
        }
    
        if (!formData.state.trim()) {
            newErrors.state = "State is required";
            valid = false;
        }
    
        setErrors(newErrors);
        return valid;
    };
    
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="w-full max-w-md bg-bodyC  shadow-md rounded-lg p-6 md:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-textC mb-4">
                    Create an Account
                </h1>
                <form className="space-y-4 md:space-y-6 text-textC" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-textC ">Full Name</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.fullName && 'border-red-500'}`} required />
                        {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email && 'border-red-500'}`} required />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phoneNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input type="tel" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.phoneNo && 'border-red-500'}`} required />
                        {errors.phoneNo && <p className="text-red-500 text-xs italic">{errors.phoneNo}</p>}
                    </div>
                    <div>
                        <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.dob && 'border-red-500'}`} required />
                        {errors.dob && <p className="text-red-500 text-xs italic">{errors.dob}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.password && 'border-red-500'}`} required />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                    </div>
                    <div>
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.city && 'border-red-500'}`} required />
                        {errors.city && <p className="text-red-500 text-xs italic">{errors.city}</p>}
                    </div>
                    <div>
                        <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.state && 'border-red-500'}`} required />
                        {errors.state && <p className="text-red-500 text-xs italic">{errors.state}</p>}
                    </div>
                    {errorMessage && <p className="text-red-500 text-sm italic">{errorMessage}</p>}
                    <button type="submit" className={`text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        {isLoading ? 'Submitting...' : 'Create an account'}
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="/userLogin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
