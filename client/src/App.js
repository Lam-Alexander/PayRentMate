import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import LandlordDashboard from "./pages/landlord/LandloardDashboard";
import Login from "./pages/login/Login";
import TenantDashboard from "./pages/tenant/TenantDashboard";
// import Pricing from "./pages/home/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="LandlordDashboard" element={<LandlordDashboard />} />
        <Route path="Login" element={<Login />} />
        <Route path="TenantDashboard" element={<TenantDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
