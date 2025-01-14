import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import UserRegistration from "./components/UserRegistration";
import VehicleRegister from "./components/VehicleRegister";
import Home from "./components/Home";

const App = () => {

    return (
        <Router>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">

                <h1 className="text-4xl font-bold mb-8">Welcome to MoversApp</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                    <div
                        className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:translate-x-4"
                    >
                        <div className="flex h-full justify-center items-center">
                            <span className="font-bold text-amber-500">
                                <Link to="/Home">Home</Link>
                            </span>
                        </div>
                    </div>

                    {/* User Registration Card */}
                    <div
                        className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:translate-x-4"

                    >
                        <div className="flex h-full justify-center items-center">
                            <span className="font-bold text-amber-500">
                                <Link to="/UserRegistration">UserRegister</Link>  {/* React Router Link */}
                            </span>
                        </div>
                    </div>

                    {/* Vehicle Registration Card */}
                    <div
                        className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:translate-x-4"

                    >
                        <div className="flex h-full justify-center items-center">
                            <span className="font-bold text-amber-500">
                                <Link to="/VehicleRegister">VehicleRegister</Link>  {/* React Router Link */}
                            </span>
                        </div>
                    </div>
                </div>


                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/UserRegistration" element={<UserRegistration />} />
                    <Route path="/VehicleRegister" element={<VehicleRegister />} />
                </Routes>

            </div>
        </Router>


    );
    return


};


export default App;
