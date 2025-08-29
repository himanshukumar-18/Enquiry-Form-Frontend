import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserID } from "../features/enquirySlice.js";

const EnquiryForm = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.enquiry);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        contact: "",
        course: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(fetchUserID(formData));
        } catch (error) {
            console.error("Error submitting form:", error);
        }

        setFormData({
            fullName: "",
            email: "",
            contact: "",
            course: "",
        })
    };

    return (

        <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
                Enquiry Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Contact */}
                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Contact
                    </label>
                    <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        placeholder="Enter your phone number"
                    />
                </div>

                {/* Course */}
                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Course
                    </label>
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    >
                        <option value="">Select a course</option>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="MBA">MBA</option>
                        <option value={"BBA"}>BBA</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 sm:py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition-all"
                >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                </button>
            </form>
        </div>
    );
};

export default EnquiryForm;
