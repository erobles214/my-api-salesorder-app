import React from "react";

const Labor = () => {

    return(
<form class="row g-3">
            <div class="col-md-6">
                <label for="materialNumber" class="form-label">Labor Number</label>
                <input type="email" class="form-control" id="materialNumber"/>
            </div>
            <div class="col-md-6">
                <label for="materialName" class="form-label">Labor Name</label>
                <input type="password" class="form-control" id="materialName"/>
            </div>
            <div class="col-12">
                <label for="materialPrice" class="form-label">Labor Price</label>
                <input type="text" class="form-control" id="materialPrice"/>
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity"/>
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip"/>
            </div>
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="bprimary-button">Sign in</button>
            </div>
            </form>
    )
};

export default Labor;