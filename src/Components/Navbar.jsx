import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {
    return (
        <>
        <header className="header">
            <div className="navbar-logo">
                Brand Logo
            </div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li> <Link to="/home">Home</Link> </li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/product">Product</Link> </li>
                    <li> <Link to="/contact">Contact</Link> </li>
                </ul>
            </nav>
        </header>
        <Outlet/>
        </>
    )
}

export default Navbar