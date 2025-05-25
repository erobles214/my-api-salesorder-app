import React from "react";
import { useForm, Controller, useFieldArray } from 'react-hook-form';

const WorkOrder = () => {

    const { handleSubmit, control, register } = useForm();

    const {
        fields: mFields,
        append: mAppend,
        remove: mRemove,        
    } = useFieldArray({
        control,
        name: 'material',
    });

    const {
        fields: lFields,
        append: lAppend,
        remove: lRemove,        
    } = useFieldArray({
        control,
        name: 'labor',
    });

    const onSubmit = async (data) => {
        console.log(JSON.stringify(data));
    }
    return(
        <form class="g-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="row p-5">
                        <div className="col-12 col-md-4 mb-3">
                            <label for="businessDate" class="form-label">Business Date</label>
                            <input type="text" class="form-control" id="businessDate" {...register("businessDate")}/>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <label for="startDate" class="form-label">Start Date</label>
                            <select id="startDate" class="form-select" {...register("startDate")}>
                            <option>Choose...</option>    
                             {timeSlots.map((slot, index) => (
                                <option key={index} value={slot}>{slot}</option>
                             ))                                  
                             }                           
                            </select>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <label for="endDate" class="form-label">End date</label>
                            <select id="endDate" class="form-select" {...register("endDate")}>
                            <option>Choose...</option>   
                            {timeSlots.map((slot, index) => (
                                <option key={index} value={slot}>{slot}</option>
                             ))                                  
                             }     
                            </select>
                        </div>
                    </div>            
                    {mFields.map((item, index) => (
                        <div className="row p-4" key={item.id}>
                            <div className="row p-4">
                                <div className="col-12 col-md-2 mb-3">
                                    <label for="materials" class="form-label fs-6" control={control}>Select Material</label>
                                    <select id="materials" class="form-select" {...register(`material.${index}.materials`)} >
                                    <option selected>Choose...</option>
                                    {materialOptions.map((item, index) => (
                                        <option key={index} value={item.id}>{item.name}</option>
                                    ))                                        
                                    }
                                    </select>
                                </div>
                                <div className="col-12 col-md-2 mb-3">
                                    <label for="cost" class="form-label fs-6">Material Cost</label>
                                    <input type="text" class="form-control" id="cost" {...register(`material.${index}.cost`)}/>
                                </div>
                                <div className="col-12 col-md-2 mb-3">
                                    <label for="tax" class="form-label fs-6">Material Tax</label>
                                    <input type="text" class="form-control" id="tax" {...register(`material.${index}.tax`)}/>
                                </div>
                                <div className="col-12 col-md-2 mb-3">
                                    <label for="total" class="form-label fs-6">Material Total</label>
                                    <input type="text" class="form-control" id="total" {...register(`material.${index}.total`)}/>
                                </div>
                                <div className="col-12 col-md-2 mb-3">
                                    <label for="quantity" class="form-label fs-6">Material Quantity</label>
                                    <input type="text" class="form-control" id="quantity" {...register(`material.${index}.quantity`)}/>
                                </div>
                                <div className="col-12 col-md-2 mb-3 p-4">
                                    <button type="button" onClick={() => mRemove(index)}>Delete</button>
                                </div>             
                            </div>
                        </div>
                    ))}   
                    <div className="row p-4">
                        <div class="col-4">
                            <button className="primary-button" onClick={() => mAppend('')}>Enter Material</button>
                        </div>
                    </div>                      
                    {lFields.map((item, index) => (
                        <div className="row p-2" key={item.id}>   
                                <div className="row p-4">
                                    <div className="col-12 col-md-4 mb-3">
                                        <label for="labors" class="form-label fs-6" control={control}>Select Client</label>
                                        <select id="labors" class="form-select" {...register(`labor.${index}.labors`)} >
                                        <option selected>Choose...</option>
                                        <option>Choose...</option>
                                        {laborOptions.map((item, index) => (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        ))
                                        }                                        
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-4 mb-3">
                                        <label for="description" class="form-label fs-6">Description</label>
                                        <textarea class="form-control" id="description" row="3" {...register(`labor.${index}.description`)}/>
                                    </div>
                                    <div className="col-12 col-md-4 mb-3">
                                        <label for="comment" class="form-label fs-6">Comment</label>
                                        <textarea class="form-control" id="comment" row="3" {...register(`labor.${index}.comment`)}/>
                                    </div>                                
                                </div>     
                                <div className="row p-4">
                                        <div className="col-12 col-md-2 mb-3">
                                        <label for="cost" class="form-label fs-6">Cost</label>
                                        <input type="text" class="form-control" id="cost" {...register(`labor.${index}.cost`)}/>
                                    </div>
                                    <div className="col-12 col-md-2 mb-3">
                                        <label for="total" class="form-label fs-6">Total</label>
                                        <input type="text" class="form-control" id="total" {...register(`labor.${index}.total`)}/>
                                    </div>
                                    <div className="col-12 col-md-2 mb-3">
                                        <label for="hours" class="form-label fs-6">Hours</label>
                                        <input type="text" class="form-control" id="hours" {...register(`labor.${index}.hours`)}/>
                                    </div>
                                    <div className="col-12 col-md-2 mb-3">                                       
                                        <label for="status" class="form-label fs-6" control={control}>Status</label>
                                        <select id="status" class="form-select" {...register(`labor.${index}.status`)} >
                                        <option selected>Choose...</option>
                                        <option>Active</option>
                                        <option>Deactive</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-2 mb-3">                                        
                                        <label for="active" class="form-label fs-6" control={control}>Active</label>
                                        <select id="active" class="form-select" {...register(`labor.${index}.active`)} >
                                        <option selected>Choose...</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-1 mb-3 p-4">
                                        <button type="button" onClick={() => lRemove(index)}>Delete</button>
                                    </div>
                                </div>                                                                    
                        </div>
                    ))}
                    <div className="row p-4">
                        <div class="col-4">
                            <button className="primary-button" onClick={() => lAppend('')}>Enter Material</button>
                        </div>
                    </div>
                     <div className="row p-4">
                        <div class="col-12 col-md-4 mb-3">
                        <label for="subtotal" class="form-label">Subtotal</label>
                        <input type="text" class="form-control" id="subtotal" {...register("subtotal")}/>
                    </div>
                    <div class="col-12 col-md-4 mb-3">
                        <label for="taxRate" class="form-label">Tax Rate</label>
                        <input type="text" class="form-control" id="taxRate" {...register("taxRate")}/>
                    </div>
                    <div class="col-12 col-md-4 mb-3">
                        <label for="taxTotal" class="form-label">Tax Total</label>
                        <input type="text" class="form-control" id="taxTotal" {...register("taxTotal")}/>
                    </div>
                    </div> 
                     <div className="row p-4">
                        <div class="col-12 col-md-4 mb-3">
                        <label for="materialtotal" class="form-label">Material Total</label>
                        <input type="text" class="form-control" id="materialtotal" {...register("materialtotal")}/>
                    </div>
                    <div class="col-12 col-md-4 mb-3">
                        <label for="additional" class="form-label">Additional</label>
                        <input type="text" class="form-control" id="additional" {...register("additional")}/>
                    </div>
                    <div class="col-12 col-md-4 mb-3">
                        <label for="totalAmount" class="form-label">Total Amount</label>
                        <input type="text" class="form-control" id="total" {...register("totalAmount")}/>
                    </div>
                    </div>                                                          
                    {/* <div class="col-12">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                        </div> 
                    </div>*/}  
                     <div className="row justify-content-end p-4">
                        <div class="col-12 col-md-4 mb-3">
                          <button type="submit" class="primary-button">Create Order</button>
                        </div>
                    </div>                             
            </form>
    )
};

const laborOptions = [
  { name: 'Gorge Paint', id: 10000 },
  { name: 'Eddys Dry Wall Services', id: 10001 },
  { name: 'Julos Flooring', id: 10002 },
  { name: 'Carlos Demoltion', id: 10003 },
];

const materialOptions = [
  { name: 'White Desert Storm Color 5lbs', id: 20000 },
  { name: 'Grey Color Basic 5lbs', id: 20001 },
  { name: 'Paint Brushes 2pc', id: 20002 },
  { name: 'Clear Coat 5lbs', id: 20003 },
];

const timeSlots = [
  "08:00 AM", "08:30 AM",
  "09:00 AM", "09:30 AM",
  "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM",
  "06:00 PM"
];

export default WorkOrder;