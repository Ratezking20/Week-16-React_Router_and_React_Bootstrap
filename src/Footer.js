import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

export default function Footer() {

const footerStyle = {
    height: '8.5rem',
    backgroundColor: 'Teal',
    paddingTop: '15px',
    color: 'whitesmoke',
    textAlign: 'center',
    
}

const containerStyle = {
    margin: '0',
    position: 'relative',
    bottom: '0',
    width: '100%'
}
    return (
        <div style={containerStyle}>
            <footer style={footerStyle}>
                <h1>Created with <b>YOU</b> in mind</h1>
                <p><small>Designed by <b>Ratez King</b></small></p>
            </footer>
        </div>
    )
}