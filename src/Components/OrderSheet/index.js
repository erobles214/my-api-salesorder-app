import React from "react";


const OrderSheet = () => {


    return (
        <>
        <div className="nav-content">
                <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">Home</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">Profile</button>
                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                        <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
                    </div>
                </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">Home</div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">Profile</div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">Contact</div>
                        <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
                    </div>

                     {/* <nav>
            <div className={cn["nav nav-tabs"]} id="nav-tab" role="tablist">
                    <button className={cn["nav-link active"]} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">Home</button>
                    <button className={cn["nav-link"]} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">Profile</button>
                    <button className={cn["nav-link"]} id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                    <button className={cn["nav-link"]} id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
                </div>
            </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className={cn["tab-pane fade show active"]} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">Home</div>
                    <div className={cn["tab-pane fade"]} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">Profile</div>
                    <div className={cn["tab-pane fade"]} id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">Contact</div>
                    <div className={cn["tab-pane fade"]} id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
                </div> */}

            </div>
            </>           
      
    )
};

export default OrderSheet;