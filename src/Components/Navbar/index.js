import React, { useEffect, useState } from "react";
import "../../assets/scss/custom.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setSidebarOpen(false);
        };

        window.addEventListener("resize", handleResize);
    }, []);
    // const togglerSidebar = () => setSidebarOpen(!isSidebarOpen);
    // const closeSidebar = () => setSidebarOpen(false);

    return (
        <>
       
        <nav className={`sidebar ${isSidebarOpen ? "collapsed" : ""}`}>
                {!isMobile && (
                <li className={`nav-item d-flex ${!isSidebarOpen ? "justify-content-end p-3" : "justify-content-center pe-3"}`}>
                    <button className="navbar-toggler btn-lg border-0" type="button" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                <i className="bi bi-list text-white fs-2"></i>
                </button></li>
                )}      
                <ul class="navbar-nav">
                    <li class="nav-item"><Link class="nav-link" to="/home"><i class="bi bi-house-door"></i><span>Home</span></Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/orders"><i className="bi bi-pencil-square"></i><span>Orders</span></Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/manage"><i class="bi bi-gear"></i><span>Manage</span></Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/inventory"><i class="bi bi-boxes"></i><span>Inventory</span></Link></li>
                </ul>                                            
        </nav>      
            </>
       );   
            
};

export default Navbar;