import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <p> &copy; 2024 burger38.com </p>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />

            </div> 
        </div>
    )
}


export default Footer