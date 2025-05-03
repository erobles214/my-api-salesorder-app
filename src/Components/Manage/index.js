import { React, useEffect, useState } from 'react';
import { Users } from "../../makeData";

const Manage = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
                //setSidebarOpen(false);
            };
    
            window.addEventListener("resize", handleResize);
        }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const filterUsers = Users.filter(user => 
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )

    return (
        <div className={`${isMobile ? "wrapper" : ""}`}>            
            <div className="container" style={{ maxHeight: '90vh', overflowY: 'auto', padding: '12px'}}>
            <div className="p-3 mb-2 bg-light border rounded">
                <label for="searchTextBox">Search User</label>
                <input type="text" 
                        id="searchTextBox" 
                        value={searchTerm} 
                        onChange={handleSearchChange}></input>
            </div>
            {filterUsers.map((user, index) =>(
            <div className="card mb-2">
                <div className="card-body">
                    <div className='row'>
                        <div className='col-md-2'>
                        <h5>Full Name: {user.firstName}</h5>                        
                        </div>                    
                        <div className='col-md-4'>
                        <h5>User Name: {user.email}</h5>                        
                        </div>
                        <div className='col-md-3'>
                        <h5>Email: {user.email}</h5>                        
                        </div>
                    </div>
                    </div>
                </div>
            ))}                
            </div>
        </div>
    )
};

export default Manage;