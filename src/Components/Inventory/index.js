import { React, useEffect, useState } from 'react';
import { InventoryItems } from "../../makeData";
import  UpdateMaterial  from "../Form/UpdateMaterial"

const Inventory = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [modalType, setModalType] = useState("");
    const [modalData, setModalData] = useState("");
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

        const handleOpenModal = (type, item) => {
            setModalType(type);
            setModalData(item);   
            console.log("type: " + type + " item: " + item.name);         
        }

        const filterInventory = InventoryItems.filter(inventory => 
            inventory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inventory.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inventory.id.includes(searchTerm)
        )
        return (                  
        
                    // Modal
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    <>
            <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {modalType === 'edit' && (
                                <UpdateMaterial items={modalData}/>
                            )}
                            {modalType === "view" && (
                                <div>
                                <p><strong>Name:</strong> {modalData.name}</p>
                                <p><strong>Brand:</strong> {modalData.brand}</p>
                                <p><strong>Type:</strong> {modalData.type}</p>
                                <p><strong>Price:</strong> {modalData.price}</p>
                                <p><strong>Stock:</strong> {modalData.stock}</p>
                                <p><strong>Out of Stock:</strong> {modalData.outOfStock}</p>
                                </div>
                            )}
                            {modalType === "delete" && (
                                <p>Are you sure you want to delete <strong>{modalData.name}</strong>?</p>
                            )}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn secondary-button" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn primary-button">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${!isMobile ? "wrapper" : ""}`}>
                <div className="container" style={{ maxHeight: '90vh', overflowY: 'auto', padding: '12px' }}>
                    <div className="d-flex justify-content-end  p-3 mb-2 bg-light border rounded">
                        <label for="searchTextBox">Search</label>
                        <input type="text"
                            id="searchTextBox"
                            value={searchTerm}
                            onChange={handleSearchChange}></input>
                    </div>
                    {filterInventory.map((items, index) => (
                        <div className="card mb-2">
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <h5>Name: {items.name}</h5>
                                    </div>
                                    <div className='col-md-2'>
                                        <h5>Brand: {items.brand}</h5>
                                    </div>
                                    <div className='col-md-2'>
                                        <h5>Cost: {items.cost}</h5>
                                    </div>
                                    <div className='col-md-2'>
                                        <h5>Quantity: {items.qty}</h5>
                                    </div>
                                    <div className='col-md-2'>
                                        {/* {`${!isMobile ? <div className='btn-group d-flex justify-content-end' role='group'>
                <button type='button' className='btn'>Edit</button>
                <button type='button' className='btn'>Delete</button>
                <button type='button' className='btn'>View</button>
                </div> :
                <div className='btn-group' role='group'>
                    <button id='btnGroupDrop1' type='button' className='btn dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
                    Select Option
                    </button>
                    <li><a className='dropdown-item' href='#'>Edit</a></li>
                    <li><a className='dropdown-item' href='#'>Delete</a></li>
                    <li><a className='dropdown-item' href='#'>View</a></li>
                </div>
            }`}                             */}
                                        <div className='btn-group d-flex justify-content-end' role='group'>
                                            {/* Button trigger modal */}
                                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleOpenModal('edit', items)}>
                                                     Edit
                                                </button>
                                            <button type='button' className='btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleOpenModal('view', items)}>
                                                      View
                                                </button>
                                            <button type='button' className='btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleOpenModal('delete', items)}>
                                                     Delete
                                                </button>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div></>
    )
};

export default Inventory;