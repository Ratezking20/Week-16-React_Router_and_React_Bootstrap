import React from "react";

export default function UpdateImage(){

    const imageStyle= {
        width: '100%',
        height: '90%',
        padding: '15px',
        borderRadius: '20px'
    }

    return (
        <div>
            <img style={imageStyle} src="https://iresumecoverletter.com/wp-content/uploads/2017/10/warehouse-worker.jpg" />
        </div>
    )
}