import React, { useState } from "react";
import { Route, Routes} from "react-router-dom";
import "./index.css";
import UserRegistration from "./components/UserRegistration";
import VehicleRegister from "./components/VehicleRegister";
import Home from "./components/Home";

const App = () => {

    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/UserRegistration" element={<UserRegistration/>}/>
                <Route path="/VehicleRegister" element={<VehicleRegister/>}/>
            </Routes>
    );


};


export default App;
