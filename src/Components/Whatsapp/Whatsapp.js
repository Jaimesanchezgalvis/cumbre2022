import React from 'react';
import { SiWhatsapp } from 'react-icons/si';
import "./Whatsap.css";





const Whatsapp = () => {
    return (
        <>
            <div className="animate__animated animate__bounceInDown">  
            <a href="https://wa.me/34722116357" target="blank">
                    < SiWhatsapp className="BsWhatsapp" />
                </a>
            </div>
        </>
    )
}

export default Whatsapp
