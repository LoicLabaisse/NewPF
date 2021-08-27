import React from 'react';
import * as FaIcons from"react-icons/fa"
import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from"../image/logo.png"




const Navbar =({toggle})=>{

    return(

        <div className="Navbar">
            <nav>
                <Link to="/"><img className="NavBar-logo" src={Logo} alt="logo"/></Link>
                <FaIcons.FaBars className="burger" onClick={toggle}/>
            <ul>
                <li>
                    <Link className="Navbar-list" to="/about"><span>A propos</span></Link>
                </li>
                <li>
                    <Link  className="Navbar-list" to="/services"><span>Services</span></Link>
                </li>
                <li>
                    <Link  className="Navbar-list" to="/skills"><span>Compétences</span></Link>
                </li>
                <li>
                    <Link  className="Navbar-list" to="/contact"><span>Contactez-moi</span></Link>
                </li>
            </ul>
            </nav>
        </div>
       )
}


export default Navbar