import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Add() {

    const[inputData, setInputData] = useState({fullName:'', productDescription: '', shipDate:''})
    
    const navigate = useNavigate()
    
    const cardHeaderStyle ={
        height: 'auto',
        padding: '0',
        margin: '2px',
        textAlign: 'center'
    }

    const cardContainerStyle = {
        paddingRight: '10px',
        marginRight: '10px',
        marginTop: '15px'
        
    }

    const textStyle ={
        width:'50%',
        textAlign: 'center',
        padding: '15px'
    }

    const footerStyle = {
        bottom: '0',
        position:'absolute',
        width: '100%'
    }

    function handleSubmit(event){
        event.preventDefault()
            axios.post('https://64458d050431e885f0000250.mockapi.io/appointments', inputData)
            .then(response =>{
                alert('Data added Successfully!')
                navigate(-1)
                document.getElementById('full-name').value=''
                document.getElementById('product-description').value=''
                document.getElementById('ship-date').value=''
            }).catch(error => console.log(error))
        
    }

    return (

        <><div>
            <Navbar />
        </div>
      
        
        <div className='d-flex w-100 vh-10 justify-content-center align-items-center'>
        <div style={textStyle}>
            <h1>Real Solutions for Real Business</h1>
            <p><b>POWER!</b> At the <em>'CLICK'</em> of a button.</p>
        </div>
               
                <div className='card w-50 border bg-light p-5' style={cardContainerStyle}>
                    <form onSubmit={handleSubmit}>
                        <div className='card-header' style={cardHeaderStyle}> 
                            <h2>Create A New Shipping Order</h2>
                        </div>
                        
                        <div>
                            <label htmlFor='name'>Customer Name:</label>
                            <input id="full-name" onChange={e => setInputData({ ...inputData, fullName: e.target.value })} type='text' name='name' className='form-control' placeholder='Enter Customer Name'/>
                        </div>
                        <div>
                            <label htmlFor='product-name'>Product Name:</label>
                            <input id="product-description" onChange={e => setInputData({ ...inputData, productDescription: e.target.value })} type='text' name='product-description' className='form-control' placeholder='Enter Product Name' />
                        </div>
                        <div>
                            <label htmlFor='ship-date'>Ship Date:</label>
                            <input id="ship-date" onChange={e => setInputData({ ...inputData, shipDate: e.target.value })} type='date' name='ship-date' className='form-control' />
                        </div>
                        <br />
                            <button className='btn btn-primary'>Submit</button>
                        
                    </form>
                </div>
            </div>
            <div style={footerStyle}>
                <Footer />
            </div>
            </>
    )
}