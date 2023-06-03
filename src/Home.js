import React from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import HomeImage from "./HomeImage";

export default function Home (){
    
    const containerStyle = {
        textAlign: 'center',
        paddingTop: '10px',
    }
    
    const paragraphStyle = {
        textAlign: 'center',
    }

    const buttonStyle = {
        textAlign: 'center',
    }

    const footerStyle = {
        bottom: '0',
        position:'relative',
        width: '100%'
    }

    const navigate = useNavigate()

    const handleSubmit= () => {
        navigate('')
    }
    
    return(
    <div>   
        <div>
            <Navbar />
        </div>
        <div style={containerStyle}>
            <h1>Welcome to ShipShop!</h1>
        </div>
        <div style={paragraphStyle}>
            <p>Where you ship what's in shop.</p>
        </div> <br />
        <div style={buttonStyle}>
        <Link to='app' onClick={e => handleSubmit()} className="btn btn-success" >Go To Orders</Link>
        </div>
            <div>
                <HomeImage />
            </div>

<div style={footerStyle}><Footer /></div>
    


    </div> 
    )
}

// https://www.malonesolutions.com/wp-content/uploads/2019/11/Blog-Template-1200x565.png