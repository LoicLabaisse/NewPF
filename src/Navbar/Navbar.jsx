import React from 'react';
import * as FaIcons from"react-icons/fa"
import { Link } from 'react-router-dom';
import './Navbar.css'




const Navbar =({toggle})=>{

    return(

        <div className="Navbar">
            <nav>
                <Link to="/"><h1>Logo</h1></Link>
                <FaIcons.FaBars className="burger" onClick={toggle}/>
            <ul>
                <li>
                    <Link to="/about"><span>A propos</span></Link>
                </li>
                <li>
                    <Link to="/services"><span>Services</span></Link>
                </li>
                <li>
                    <Link to="/skills"><span>Compétences</span></Link>
                </li>
                <li>
                    <Link to="/contact"><span>Contactez-moi</span></Link>
                </li>
            </ul>
            </nav>
        </div>
       )
}


export default Navbar