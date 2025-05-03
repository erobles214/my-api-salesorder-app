import { React, useEffect, useState } from 'react';
import { InventoryItems } from "../../makeData";

const Inventory = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

        const handleSearchChange = (event) => {
            setSearchTerm(event.target.value);
        }
    
        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
                //setSidebarOpen(false);
            };
    
            window.addEventListener("resize", handleResize);
        }, []);
        const filterInventory = InventoryItems.filter(inventory => 
            inventory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inventory.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inventory.id.includes(searchTerm)
        )
    return (
                    // only if not mobile logic
                    <div className={`${!isMobile ? "wrapper" : ""}`}> 
                        <div className="container" style={{ maxHeight: '90vh', overflowY: 'auto', padding: '12px'}}>
                        <div className="p-3 mb-2 bg-light border rounded">
                            <label for="searchTextBox">Search</label>
                            <input type="text" 
                                   id="searchTextBox"
                                   value={searchTerm}
                                   onChange={handleSearchChange}></input>
                        </div>
                        {filterInventory.map((items, index) =>(
                        <div className="card mb-2">
                            <div className="card-body">
                                    <div className='row'>
                                        <div className='col-md-2'>
                                        <h5>Name: {items.name}</h5>                                        
                                        </div>                    
                                        <div className='col-md-2'>
                                        <h5>Brand: {items.brand}</h5>                                        
                                        </div>
                                        <div className='col-md-1'>
                                        <h5>Cost: {items.cost}</h5>                                      
                                        </div>
                                        <div className='col-md-1'>
                                        <h5>Quantity: {items.qty}</h5>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}                                                  
                    </div>
                </div>
    )
};

export default Inventory;