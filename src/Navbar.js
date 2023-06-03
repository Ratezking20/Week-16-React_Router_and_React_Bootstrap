// •	Using create-react-app, create a new React project.  check
//  Create a LoginForm component that contains the following:
// •	Username and password input fields, an h3 that says Log In, with a border.
// Style the component using the default generated CSS file.
// •	Create a Navigation component that contains links styled like a navbar.  check
// •	The links don’t have to go anywhere.
// •	Put the Navigation component at the top of the page and the LoginForm 
//  in the center of the page.




import React, { Component, Fragment } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";

class Navbar extends Component {
     

    navStyles = {
        height: '6.5rem',
        backgroundColor: 'teal'

    }

    textStyles = {
        color: 'white',
        margin: 0,
        marginLeft: 15,
    }
    
    render() { 
        return (
            <Fragment>
                
                <nav style= { this.navStyles } className="navbar navbar-expand">
                    <div>
                        <h1><Link to='/' style={this.textStyles} className="navbar-brand m-15">ShipShop</Link></h1>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' style={this.textStyles} className="nav-link">Home</Link>
                        </li>
                        <li className='nav-item dropdown'>
                            <Link to="app" style={this.textStyles} className="nav-link dropdown-toggle" data-target="dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >Shop</Link>
                            <ul className='dropdown-menu'>
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">Menu</a>
                                </li>
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">Specials</a>
                                </li>
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">About Us</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        );
    }
}

export default Navbar;