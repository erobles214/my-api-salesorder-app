import React, { useEffect, useState }  from "react";

const UpdateManage = ({ users }) => {
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    return(

        <form class="row g-3">
            <div class="col-md-6">
                <label for="firstName" class="form-label">User First Name</label>
                <input type="text"
                 className="form-control" 
                 id="firstName"
                 defaultValue={users.firstName || ""}/>
            </div>
            <div class="col-md-6">
                <label for="lastName" class="form-label">User Last Name</label>
                <input type="text" 
                class="form-control" 
                id="lastName"
                defaultValue={users.lastName || ""}/>
            </div>
            <div class="col-12">
                <label for="email" class="form-label">User Email</label>
                <input type="text" 
                class="form-control" 
                id="email"
                defaultValue={users.email || ""}/>
            </div>
            <div class="col-12">
                <label for="email" class="form-label">User Username</label>
                <input type="text" 
                class="form-control" 
                id="email"
                defaultValue={users.email || ""}/>
            </div>           
            <div class="col-12">
                <button type="submit" className="primary-button">Edit</button>
            </div>
            </form>
    )
};

export default UpdateManage;