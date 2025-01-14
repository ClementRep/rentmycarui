import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/users/register", formData);
            alert(response.data); // Success message from backend
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-6 space-y-4"
            >
                <input
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-purple-600"
                    type="text"
                    name="name"
                    placeholder="Name..."
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-purple-600"
                    type="email"
                    name="email"
                    placeholder="Email..."
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-purple-600"
                    type="password"
                    name="password"
                    placeholder="Password..."
                    value={formData.password}
                    onChange={handleChange}
                />
                <button
                    className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-700"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;
