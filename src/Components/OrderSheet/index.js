import React, { useEffect, useState } from "react";


const OrderSheet = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

     useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);              
            };
    
            window.addEventListener("resize", handleResize);
        }, []);

    return (
        <>
        <div className="nav-content">
                <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-wrk-list-tab" data-bs-toggle="tab" data-bs-target="#nav-wrk-list" type="button" role="tab" aria-controls="nav-wrk-list" aria-selected="false">
                        {!isMobile ? "Work Order List" : <i class="bi bi-file-spreadsheet-fill"></i>}
                            </button>
                        <button className="nav-link" id="nav-wrk-ord-tab" data-bs-toggle="tab" data-bs-target="#nav-wrk-ord" type="button" role="tab" aria-controls="nav-wrk-ord" aria-selected="true">
                            {!isMobile ? "Work Order" : <i class="bi bi-inboxes-fill"></i> }</button>
                        <button className="nav-link" id="nav-material-tab" data-bs-toggle="tab" data-bs-target="#nav-material" type="button" role="tab" aria-controls="nav-material" aria-selected="false">
                        {!isMobile ? "Material" : <i class="bi bi-boxes"></i> }</button>
                        <button className="nav-link" id="nav-labor-tab" data-bs-toggle="tab" data-bs-target="#nav-labor" type="button" role="tab" aria-controls="nav-labor" aria-selected="false" disabled>
                        {!isMobile ? "Labor" : <i class="bi bi-tools"></i> }</button>
                    </div>
                </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-wrk-list" role="tabpanel" aria-labelledby="nav-wrk-list-tab" tabIndex="0">Work Order List</div>
                        <div className="tab-pane fade" id="nav-wrk-ord" role="tabpanel" aria-labelledby="nav-wrk-ord-tab" tabIndex="0">Work Order Content</div>
                        <div className="tab-pane fade" id="nav-material" role="tabpanel" aria-labelledby="nav-material-tab" tabIndex="0">Material</div>
                        <div className="tab-pane fade" id="nav-labor" role="tabpanel" aria-labelledby="nav-labor-tab" tabIndex="0">Labor</div>
                    </div>

                     {/* <nav>
            <div className={cn["nav nav-tabs"]} id="nav-tab" role="tablist">
                    <button className={cn["nav-link active"]} id="nav-wrk-list-tab" data-bs-toggle="tab" data-bs-target="#nav-wrk-list" type="button" role="tab" aria-controls="nav-wrk-list" aria-selected="false">Home</button>
                    <button className={cn["nav-link"]} id="nav-wrk-ord-tab" data-bs-toggle="tab" data-bs-target="#nav-wrk-ord" type="button" role="tab" aria-controls="nav-wrk-ord" aria-selected="true">Profile</button>
                    <button className={cn["nav-link"]} id="nav-material-tab" data-bs-toggle="tab" data-bs-target="#nav-material" type="button" role="tab" aria-controls="nav-material" aria-selected="false">Contact</button>
                    <button className={cn["nav-link"]} id="nav-labor-tab" data-bs-toggle="tab" data-bs-target="#nav-labor" type="button" role="tab" aria-controls="nav-labor" aria-selected="false" disabled>Disabled</button>
                </div>
            </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className={cn["tab-pane fade show active"]} id="nav-wrk-list" role="tabpanel" aria-labelledby="nav-wrk-list-tab" tabindex="0">Home</div>
                    <div className={cn["tab-pane fade"]} id="nav-wrk-ord" role="tabpanel" aria-labelledby="nav-wrk-ord-tab" tabindex="0">Profile</div>
                    <div className={cn["tab-pane fade"]} id="nav-material" role="tabpanel" aria-labelledby="nav-material-tab" tabindex="0">Contact</div>
                    <div className={cn["tab-pane fade"]} id="nav-labor" role="tabpanel" aria-labelledby="nav-labor-tab" tabindex="0">...</div>
                </div> */}

            </div>
            </>           
      
    )
};

export default OrderSheet;