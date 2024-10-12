import React from "react";
import Button from "./Button";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
    const [result, setResult] = React.useState(null);

    React.useEffect(() => {
        if (result) {
            const timer = setTimeout(() => {
                setResult(null);
            }, 3000);
            return () => clearTimeout(timer); // Clear the timer if the component unmounts
        }
    }, [result]);

    const [formData, setFormData] = React.useState({
        service: "",
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone" && value.length > 10) {
            return;
        }
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult({ message: "Sending....", status: "info" });

        const data = new FormData();
        data.append("access_key", import.meta.env.VITE_API_KEY); // <---------------apikey
        data.append("service", formData.service);
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data
            });
            const resultData = await response.json();

            if (resultData.success) {
                setResult({ message: "Thank you for contacting us! We will reach you soon.", status: "success" });
                setFormData({
                    service: "",
                    name: "",
                    email: "",
                    phone: ""
                });
            } else {
                setResult({ message: resultData.message, status: "error" });
            }
        } catch (error) {
            setResult({ message: "Submission failed. Please try again later.", status: "error" });
        }
    };

    return (
        <div id='contact-form' className='flex flex-col sm:flex-row bg-gray-100 sm:m-5 sm:mx-7 p-4 rounded-[20px] overflow-hidden shadow-lg'>

            {/* Left Section */}
            <div className='flex-1 relative sm:mr-4 mb-6 sm:mb-0 p-4'>
                <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left mb-2">Get In Touch With Us!</h1>
                <p className="text-sm md:text-base text-center sm:text-left mb-2">
                    Need Electrical Services or have a project in mind? We are here to help! Reach out to us for a free consultation and let us bring your electrical vision to life.
                </p>
                <div className="flex flex-col items-center sm:items-start space-y-2 mb-4">
                    <p className="flex items-center space-x-2 text-yellow-700"><MdEmail /><span className='text-black'>email@example.com</span></p>
                    <p className="flex items-center space-x-2 text-yellow-700"><FaPhoneAlt /><span className='text-black'>+1234567890</span></p>
                    <p className="flex items-center space-x-2 text-yellow-700"><MdLocationPin /><span className='text-black'>123 Main St, City</span></p>
                </div>
            </div>

            {/* Right Section (Form) */}
            <div className='flex-1 mt-4 sm:mt-0 w-full sm:max-w-lg p-4'>
                <form className='relative rounded-md p-4 w-full' onSubmit={onSubmit}>
                    <div className='mb-2'>
                        <label className="block font-medium mb-1">How Can We Help You?</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            style={{ borderRadius: "10px" }}
                            className='w-full p-2 bg-white rounded-md outline-none'
                        >
                            <option value="" disabled>Select a service...</option>
                            <option value="Electrical Repair">Electrical Repair</option>
                            <option value="Installation Services">Installation Services</option>
                            <option value="Consultation">Consultation</option>
                            <option value="Emergency Services">Emergency Services</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                        <div>
                            <label className="block font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={{ borderRadius: "10px" }}
                                placeholder='Name...'
                                className='w-full p-2 bg-white rounded-md outline-none'
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                style={{ borderRadius: "10px" }}
                                placeholder='Email...'
                                className='w-full p-2 bg-white rounded-md outline-none'
                            />
                        </div>
                    </div>
                    <div className='gap-2 mt-2 w-full'>
                        <div>
                            <label className="block font-medium mb-1">Phone Number</label>
                            <input
                                type="number"
                                required
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ borderRadius: "10px" }}
                                placeholder='Phone Number...'
                                maxLength="10"
                                className='w-full p-2 bg-white rounded-md outline-none'
                            />
                        </div>
                    </div>
                    <div className='m-4'>
                        <Button text={"Submit"} />
                    </div>
                </form>

                {/* Display result message */}
                {result && (
                    <p
                        className={`text-center ${result.status === "success"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                    >
                        {result.message}
                    </p>
                )}
            </div>
        </div>
    );
}
