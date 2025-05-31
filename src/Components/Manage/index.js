import { React, useEffect, useState } from 'react';
import { Users } from "../../makeData";
import UpdateManage from '../Form/UpdateManage';
import { getUsers } from '../../Modules/userModules'
const Manage = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [modalType, setModalType] = useState("");
    const [modalData, setModalData] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
                //setSidebarOpen(false);
            };
            
            const fetchUsers = async () => {
                try {
                    const response = await getUsers();
                    setUserData(response.data);
                    console.log('Users', userData);
                } catch (error) {
                    console.error('Error fetching users:', error);
                }
                finally{
                    setIsLoading(false);
                }
            };           
            setIsLoading(true);
            fetchUsers();

            window.addEventListener("resize", handleResize);

            // Clean up event listener
            return () => window.removeEventListener("resize", handleResize);
        }, []);
       
        const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleOpenModal = (type, user) => {
            setModalType(type);
            setModalData(user);   
            console.log("type: " + type + " item: " + user.firstName);         
    }

    const filterUsers = userData.filter(user => 
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )

    return (
        <><div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {modalType === 'edit' && (
                            <UpdateManage users={modalData} />
                        )}
                        {modalType === "view" && (
                            <div>
                                <p><strong>First Name: </strong> {modalData.firstName}</p>
                                <p><strong>Last Name: </strong> {modalData.lastName}</p>
                                <p><strong>Email: </strong> {modalData.email}</p>
                                <p><strong>Username: </strong> {modalData.email}</p>
                            </div>
                        )}
                        {modalType === "delete" && (
                            <p>Are you sure you want to delete <strong>{modalData.firstName}</strong>?</p>
                        )}
                    </div>
                    <div class="modal-footer">
                       <button type="button" class="btn secondary-button" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn primary-button">Save changes</button>
                    </div>
                </div>
            </div>
        </div><div className={`${!isMobile ? "wrapper" : ""}`}>
            {isLoading ? (
                    // Spinner while loading
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="spinner-grow $spinner-color" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    ) : (
                <div className="container" style={{ maxHeight: '90vh', overflowY: 'auto', padding: '12px' }}>
                    <div className="d-flex justify-content-end p-3 mb-2 bg-light border rounded">
                        <label htmlFor="searchTextBox" className="me-2 mb-0">Search User</label>
                        <input type="text"
                            id="searchTextBox"
                            value={searchTerm}
                            onChange={handleSearchChange}></input>
                    </div>
                    {filterUsers.map((user) => (
                        <div className="card mb-2">
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <h5><b>Full Name: </b>{user.firstName} {user.lastName}</h5>
                                    </div>
                                    <div className='col-md-4'>
                                        <h5><b>User Name: </b>{user.email}</h5>
                                    </div>
                                    <div className='col-md-4'>
                                        <h5><b>Email: </b>{user.email}</h5>
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
                                            <button type="button" className="btn primary-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleOpenModal('edit', user)}>
                                                     Edit
                                                </button>
                                            <button type='button' className='btn primary-button' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleOpenModal('view', user)}>
                                                      View
                                                </button>
                                            <button type='button' className='btn primary-button' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleOpenModal('delete', user)}>
                                                     Delete
                                                </button>           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                )}
            </div></>
    )
};

export default Manage;