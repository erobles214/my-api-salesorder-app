import React, { useEffect, useState }  from "react";

const UpdateMaterial = ({ items }) => {
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    return(

        <form class="row g-3">
            <div class="col-md-6">
                <label for="name" class="form-label">Material Name</label>
                <input type="text"
                 className="form-control" 
                 id="name"
                 defaultValue={items.name || ""}/>
            </div>
            <div class="col-md-6">
                <label for="brand" class="form-label">Material Brand</label>
                <input type="text" 
                class="form-control" 
                id="brand"
                defaultValue={items.brand || ""}/>
            </div>
            <div class="col-12">
                <label for="type" class="form-label">Material Type</label>
                <input type="text" 
                class="form-control" 
                id="type"
                defaultValue={items.type || ""}/>
            </div>
            <div class="col-12">
                <label for="price" class="form-label">Material Price</label>
                <input type="text" 
                class="form-control" 
                id="price"
                defaultValue={items.price || ""}/>
            </div>
            <div class="col-md-6">
                <label for="stock" class="form-label">Material Stock</label>
                <input type="text" 
                class="form-control" 
                id="stock"
                defaultValue={items.stock || ""}/>
            </div>
            <div class="col-md-6">
                <label for="outOfStock" class="form-label">Material Out Of Stock</label>
                <input type="text" 
                class="form-control" 
                id="outOfStock"
                defaultValue={items.outOfStock || ""}/>
            </div>
            <div class="col-12">
                <button type="submit" className="primary-button">Edit</button>
            </div>
            </form>
    )
};

export default UpdateMaterial;