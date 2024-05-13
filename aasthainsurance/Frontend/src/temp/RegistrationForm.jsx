import { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNo: '',
        email: '',
        address: '',
        dob: '',
        aadharNo: '',
        panNo: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.post('http://your-backend-url/register', formData)
                .then(response => {
                    console.log("Form submitted successfully:", response.data);
                    // Optionally, you can redirect the user or show a success message
                })
                .catch(error => {
                    console.error("Error submitting form:", error);
                    // Handle error scenarios, such as showing an error message to the user
                });
            // Reset form fields after submission (optional)
            setFormData({
                fullName: '',
                phoneNo: '',
                email: '',
                address: '',
                dob: '',
                aadharNo: '',
                panNo: '',
                password: ''
            });
        }
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required";
            valid = false;
        }

        if (!formData.phoneNo.trim()) {
            newErrors.phoneNo = "Phone No. is required";
            valid = false;
        } else if (!/^\d{10}$/.test(formData.phoneNo.trim())) {
            newErrors.phoneNo = "Phone No. must be 10 digits";
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
            newErrors.email = "Email is invalid";
            valid = false;
        }

        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
            valid = false;
        }

        if (!formData.dob.trim()) {
            newErrors.dob = "Date of Birth is required";
            valid = false;
        }

        if (!formData.aadharNo.trim()) {
            newErrors.aadharNo = "Aadhar No. is required";
            valid = false;
        } else if (!/^\d{12}$/.test(formData.aadharNo.trim())) {
            newErrors.aadharNo = "Aadhar No. must be 12 digits";
            valid = false;
        }

        if (!formData.panNo.trim()) {
            newErrors.panNo = "PAN No. is required";
            valid = false;
        } else if (!/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/.test(formData.panNo.trim())) {
            newErrors.panNo = "PAN No. is invalid";
            valid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 md:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white mb-4">
                    Create an Account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.fullName && 'border-red-500'}`} required />
                      {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
                  </div>
                  <div>
                      <label htmlFor="phoneNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                      <input type="tel" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.phoneNo && 'border-red-500'}`} required />
                      {errors.phoneNo && <p className="text-red-500 text-xs italic">{errors.phoneNo}</p>}
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email && 'border-red-500'}`} required />
                      {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                  </div>
                  <div>
                      <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                      <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.address && 'border-red-500'}`} required />
                      {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
                  </div>
                  <div>
                      <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                      <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.dob && 'border-red-500'}`} required />
                      {errors.dob && <p className="text-red-500 text-xs italic">{errors.dob}</p>}
                  </div>
                  <div>
                      <label htmlFor="aadharNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aadhar Number</label>
                      <input type="text" id="aadharNo" name="aadharNo" value={formData.aadharNo} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.aadharNo && 'border-red-500'}`} required />
                      {errors.aadharNo && <p className="text-red-500 text-xs italic">{errors.aadharNo}</p>}
                  </div>
                  <div>
                      <label htmlFor="panNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PAN Number</label>
                      <input type="text" id="panNo" name="panNo" value={formData.panNo} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.panNo && 'border-red-500'}`} required />
                      {errors.panNo && <p className="text-red-500 text-xs italic">{errors.panNo}</p>}
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.password && 'border-red-500'}`} required />
                      {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                      </div>
                      <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login/user" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
