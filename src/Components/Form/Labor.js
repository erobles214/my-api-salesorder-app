import React from "react";
import { postLabor } from "../../Modules/inventoryModules"
import { useForm, Controller } from 'react-hook-form';
const Labor = () => {

    const { handleSubmit, control, register } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await postLabor(data);
            if (response?.status === 200)
            {
                console.log("Success");
            }else {
                console.log("Failed with status:", response?.status);
            }
        } catch (error) {
            console.error("API call failed:", error);
        }
    }
    return(
    <form className="row p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="row p-3">
            <div className="col-12 col-md-6 mb-3">
                    <label for="name" class="form-label">Name</label>                            
                    <input type="text"
                    className="form-control" 
                    id="name"
                    {...register("name")}/>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label for="type" class="form-label">Type</label>
                    <input type="text"
                    className="form-control" 
                    id="type"
                    {...register("type")}/>
                </div>        
        </div>    
          <div className="row p-3">
                <div className="col-12 col-md-6 mb-3">
                <label for="materialPrice" class="form-label">Description</label>
                <input type="text"
                 className="form-control" 
                 id="materialPrice"
                 {...register("materialPrice")}/>
            </div>
            <div className="col-12 col-md-6 mb-3">
                <label for="inputAddress2" class="form-label">Comment</label>
                <input type="text"
                 className="form-control" 
                 id="materialPrice"
                 {...register("materialPrice")}/>
            </div>            
            </div>                    
            <div className="col-12">
                <button type="submit" class="primary-button">Save</button>
            </div>
            </form>
    )
};

export default Labor;