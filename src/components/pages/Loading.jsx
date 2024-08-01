import React from 'react';
import "./Loading.css";
import video from "../../assets/images/preloader.mp4";

function Loading() {
    return (
        <>
        <div className="contenedor-preloader">
        <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
        </video>
        </div>    
        </>
    )
}

export default Loading
