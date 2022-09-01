import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
    return (
        <div className="nav">
            <ul className="nav-list">
                <Link to="/">
                    <img className="nav-logo" src="http://assets.stickpng.com/images/585f9333cb11b227491c3581.png" alt="logo"></img>
                </Link>
                <Link to="/">
                    <li className="nav-link">Home</li>
                </Link>
                <Link to="/category/avengers">
                    <li className="nav-link">Avengers</li>
                </Link>
                <Link to="/category/thor">
                    <li className="nav-link">Thor</li>
                </Link>
                <Link to="/category/spiderman">
                    <li className="nav-link">Spiderman</li>
                </Link>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </ul>
        </div>
    );
}

export default NavBar