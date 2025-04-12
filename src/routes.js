import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar"
import ManagePage from "./Pages/ManagePage"
import OrdersPage from './Pages/OrdersPage';
import InventoryPage from './Pages/InventoryPage';

// import NotFound from "./Pages/NotFound";
//import Navbar from "./Components/Navbar/Navbar";

const AppContent = () => {
    const location = useLocation();
    const hideNavbarRoutes = ["/"];

    return (
        <>
            {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
            <Routes>               
                <Route path="/" element={<Login />} />                
                <Route path="/home" element={<HomePage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/manage" element={<ManagePage />} />
                <Route path="/inventory" element={<InventoryPage />}/>
            
            </Routes>   
        </>
    )
};
const AppRouter = () => {
    return (
        <Router>     
            <AppContent />       
        </Router>
    )
}

export default AppRouter;