import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { name, email, tel, message } = formData;
      const mailtoLink = `mailto:?subject=New Request&body=Name: ${name}%0AEmail: ${email}%0ATelephone: ${tel}%0AMessage: ${message}`;
      window.location.href = mailtoLink;
      setFormData({
        name: "",
        email: "",
        tel: "",
        message: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.tel.trim()) {
      newErrors.tel = "Telephone Number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.tel.trim())) {
      newErrors.tel = "Telephone Number must be 10 digits";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full space-y-8 bg-bodyC p-4">
        <p className="text-lg text-textC">
          Fill in the form to start a conversation
        </p>

        <div className="flex flex-wrap">
          <form className="w-full md:w-1/2 space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`p-3 bg-headerC dtext-textC focus:outline-none${
                  errors.name && "border-red-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`p-3 bg-headerC text-textC focus:outline-none ${
                  errors.email && "border-red-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Telephone Number"
                value={formData.tel}
                onChange={handleChange}
                className={`p-3 bg-headerC text-textC focus:outline-none ${
                  errors.tel && "border-red-500"
                }`}
              />
              {errors.tel && (
                <p className="text-red-500 text-sm">{errors.tel}</p>
              )}
            </div>

            <div className="flex flex-col">
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`p-3 bg-headerC text-textC focus:outline-none ${
                  errors.message && "border-red-500"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="py-3 px-6 bg-footerC hover:bg-bodyC text-textC font-semibold rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2"
            >
              Submit
            </button>
          </form>

          {/* Google Maps iframe */}
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.362120517823!2d75.90537277403347!3d17.680345583257687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da86fd68f571%3A0x558b4160103884ad!2sAastha%20Insurance%20Investment!5e0!3m2!1sen!2sin!4v1708590894286!5m2!1sen!2sin"
            width="400"
            height="340"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-4"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
