import React from "react";

const Labor = () => {

    return(
<form className="row g-3">
            <div class="col-md-6">
                <label for="name" class="form-label">Name</label>                            
                <input type="text"
                 className="form-control" 
                 id="name"/>
            </div>
            <div class="col-md-6">
                <label for="type" class="form-label">Type</label>
                <input type="text"
                 className="form-control" 
                 id="type"/>
            </div>
            <div class="col-6">
                <label for="materialPrice" class="form-label">Description</label>
                <input type="text"
                 className="form-control" 
                 id="materialPrice"/>
            </div>
            <div class="col-6">
                <label for="inputAddress2" class="form-label">Comment</label>
                <input type="text"
                 className="form-control" 
                 id="materialPrice"/>
            </div>            
            <div class="col-6">
                <button type="submit" class="primary-button">Save</button>
            </div>
            </form>
    )
};

export default Labor;