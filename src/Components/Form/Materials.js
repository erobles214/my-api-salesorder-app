import React, { useEffec, useState }  from "react";
import {addMaterial } from "../../Modules/inventoryModules";
import { useForm, Controller, useFieldArray } from 'react-hook-form';

const Materials = () => {
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    const { handleSubmit, control, register } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await addMaterial(data);
            if (response?.status === 200)
            {
                console.log("Success");
            }else {
                console.log("Failed with status:", response?.status);
            }      
        } catch (error) {
           console.error("API call failed:", error);      
        }
         console.log(JSON.stringify(data));
    }

    return(
    <form class="row p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="row p-3">
                <div class="col-12 col-md-6 mb-3">
                    <label for="name" class="form-label">Material Name</label>
                    <input type="text"
                    className="form-control" 
                    id="name"
                    {...register("name")}/>
                    {/* defaultValue={items.name || ""} */}
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="brand" class="form-label">Material Brand</label>
                    <input type="text" 
                    class="form-control" 
                    id="brand"
                    {...register("brand")}/>
                    {/* defaultValue={items.brand || ""} */}
                </div>
            </div> 
            <div className="row p-3">
                <div class="col-12 col-md-6 mb-3">
                <label for="type" class="form-label">Material Type</label>
                <input type="text" 
                class="form-control" 
                id="type" 
                {...register("type")}/>
                {/* defaultValue={items.type || ""}/> */}
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="price" class="form-label">Material Price</label>
                    <input type="text" 
                    class="form-control" 
                    id="price"
                    {...register("price")}/>
                    {/* defaultValue={items.price || ""}/> */}
                </div>
            </div>    
             <div className="row p-3">
                 <div class="col-12 col-md-6 mb-3">
                <label for="stock" class="form-label">Material Stock</label>
                <input type="text" 
                class="form-control" 
                id="stock"
                {...register("stock")}/>
                {/* defaultValue={items.stock || ""}/> */}
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="outOfStock" class="form-label">Material Out Of Stock</label>
                    <input type="text" 
                    class="form-control" 
                    id="outOfStock"
                    {...register("outOfStock")}/>
                    {/* defaultValue={items.outOfStock || ""}/> */}
                </div>
            </div>                             
            <div class="col-12">
                <button type="submit" className="primary-button">Save</button>
            </div>
            </form>
    )
};

export default Materials;