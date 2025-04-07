import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
// import NotFound from "./Pages/NotFound";
//import Navbar from "./Components/Navbar/Navbar";

const AppRouter = () => {
    return (
        <Router>
            {/* <Navbar/> */}
            <Routes>
                {/* <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route> */}
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                {/* <Route path="*" element={<NotFound />}></Route>              */}
            </Routes>
        </Router>
    )
}

export default AppRouter;