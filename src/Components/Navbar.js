import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Assets/css/nav-style.css'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="nav">
                    <Link style={{ 'float': 'left' }} to="/"><span className="nav-home"><i className="fas fa-home"></i></span></Link>
                    <Link to="/about"><span className="nav-item">About Us</span></Link>
                    <Link to="/contact"><span className="nav-item">Contact Us</span></Link>
                </nav>
            </>
        )
    }
}
