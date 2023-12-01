import React from "react";
import "./navbar.css"; 
const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="logo">
                <img style={{width:"32px !important"}} src="vectorlogo1.png" alt="img"/>
                <img style={{width:"114px !important"}} src="studiologo.png" alt="img"/>
            </div>
            <div className="nav-items">
                <p className="nav-item-text">Home</p>
                <p className="nav-item-text">Attorneys</p>
                <p className="nav-item-text">Practice Areas</p>
                <p className="nav-item-text">Abous Us</p>
            </div>
            <div>
                <div className="contact-section">
                    Contact Now
                </div>
            </div>
        </div>
    )
}
export default Navbar;