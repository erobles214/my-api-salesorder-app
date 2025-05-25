import React from "react";
import { postLabor } from "../../Modules/inventoryModules"
import { useForm, Controller, useFieldArray } from 'react-hook-form';
const Labor = () => {

    const { handleSubmit, control, register } = useForm();
    return(
<form className="row p-5">
        <div className="row p-3">
            <div class="col-12 col-md-6 mb-3">
                    <label for="name" class="form-label">Name</label>                            
                    <input type="text"
                    className="form-control" 
                    id="name"/>
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="type" class="form-label">Type</label>
                    <input type="text"
                    className="form-control" 
                    id="type"/>
                </div>        
        </div>    
          <div className="row p-3">
                <div class="col-12 col-md-6 mb-3">
                <label for="materialPrice" class="form-label">Description</label>
                <input type="text"
                 className="form-control" 
                 id="materialPrice"/>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <label for="inputAddress2" class="form-label">Comment</label>
                <input type="text"
                 className="form-control" 
                 id="materialPrice"/>
            </div>            
            </div>                    
            <div class="col-12">
                <button type="submit" class="primary-button">Save</button>
            </div>
            </form>
    )
};

export default Labor;