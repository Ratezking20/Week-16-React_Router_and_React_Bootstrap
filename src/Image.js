import React from "react";

export default function Image(){

    const imageStyle= {
        width: '100%',
        height: '90%',
        padding: '15px'
    }

    return (
        <div>
            <img style={imageStyle} src="https://taxpro-otg.com/wp-content/uploads/2019/11/career_stability.jpg" />
        </div>
    )
}