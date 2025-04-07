import { React } from "react";
import styles from '../styles.scss';
import Navbar from "../Components/Navbar/Navbar"
const Home = () => {
    return(    
    <>
    <div >
    <Navbar></Navbar>
    </div>
    <div className="content-container">        
        <h1 className="h1">this is home</h1>
    </div></>
    )
}

export default Home;