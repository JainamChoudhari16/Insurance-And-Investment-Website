import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
        password: '',
        city: '',
        state: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear validation error message on input change
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                const res = await fetch('http://localhost:8080/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                console.log(formData);
                if (res.ok) {
                    console.log('Registration successful:', res.data);
                    setSuccessMessage('User successfully registered.');
                    setFormData({
                        userName: '',
                        email: '',
                        phone: '',
                        gender: '',
                        dob: '',
                        password: '',
                        city: '',
                        state: ''
                    });
                    setErrors({});
                    setErrorMessage('');
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000); 
                } else {
                    const errorData = await res.json();
                    setErrorMessage(errorData.message || "An error occurred while submitting the form. Please try again later.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                setErrorMessage("An error occurred while submitting the form. Please try again later.");
            }
            setIsLoading(false);
        }
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};

        if (!formData.userName.trim()) {
            newErrors.userName = "Full Name is required";
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
            newErrors.email = "Email is invalid";
            valid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone No. is required";
            valid = false;
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            newErrors.phone = "Phone No. must be 10 digits";
            valid = false;
        }

        if (!formData.gender.trim()) {
            newErrors.gender = "Gender is required";
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
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 md:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 mb-4">
                    Create an Account
                </h1>
                <form className="space-y-4 md:space-y-6 text-gray-900" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="userName" className="block mb-2 text-sm font-medium">Full Name</label>
                        <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.userName && 'border-red-500'}`} required />
                        {errors.userName && <p className="text-red-500 text-xs italic">{errors.userName}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.email && 'border-red-500'}`} required />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.phone && 'border-red-500'}`} required />
                        {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
                    </div>
                    <div>
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium">Gender</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.gender && 'border-red-500'}`} required>
                            <option value="">Select Gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender}</p>}
                    </div>
                    <div>
                        <label htmlFor="dob" className="block mb-2 text-sm font-medium">Date of Birth</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.dob && 'border-red-500'}`} required />
                        {errors.dob && <p className="text-red-500 text-xs italic">{errors.dob}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.password && 'border-red-500'}`} required />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                    </div>
                    <div>
                        <label htmlFor="city" className="block mb-2 text-sm font-medium">City</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.city && 'border-red-500'}`} required />
                        {errors.city && <p className="text-red-500 text-xs italic">{errors.city}</p>}
                    </div>
                    <div>
                        <label htmlFor="state" className="block mb-2 text-sm font-medium">State</label>
                        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.state && 'border-red-500'}`} required />
                        {errors.state && <p className="text-red-500 text-xs italic">{errors.state}</p>}
                    </div>
                    <button type="submit" className={`text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        {isLoading ? 'Submitting...' : 'Create an account'}
                    </button>
                    <p className="text-sm font-light text-gray-500">
                        Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline">Login here</a>
                    </p>
                    {successMessage && <p className="text-green-500 text-sm italic">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 text-sm italic">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
}

export default SignUp;
