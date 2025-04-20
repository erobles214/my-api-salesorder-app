import React, { useEffect, useState }  from "react";
import "../../assets/scss/custom.scss";
import WorkOrder from "./WorkOrder";
import Materials from "./Materials"
import Labor from "./Labor";

const Form = (props) => {

    const [content, setContent] = useState("");

    useEffect(() => {
        const getFormType = () =>{
            const formTypeName = props.tabName;
            switch (formTypeName) {
                case 'Work Order':
                    setContent("workOrd");
                    break;
                case 'Material':
                    setContent("material");
                    break;
                case 'Labor':
                    setContent("labor");
                    break;
                default: 
                 setContent("");
                 break;
            }
        };

        getFormType();
    })
    return(

        <div>
            {content === "workOrd" ? <WorkOrder></WorkOrder> : ""}
            {content === "material" ? <Materials></Materials> : ""}
            {content === "labor" ? <Labor></Labor> : ""}
        </div>
           
    )
};

export default Form;