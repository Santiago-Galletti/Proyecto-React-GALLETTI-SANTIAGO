import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
    return (
        <div className="nav">
            <ul className="nav-list">
                <Link to="/">
                    <img className="nav-logo" src="https://i.im.ge/2022/09/03/ObReu4.585f9333cb11b227491c3581.png" alt="logo"></img>
                </Link>
                <NavLink to="/" className={({isActive}) => (isActive ? "active" : "noActive")} >
                    <li>Home</li>
                </NavLink>
                <NavLink to="/category/avengers" className={({isActive}) => (isActive ? "active" : "noActive")}>
                    <li>Avengers</li>
                </NavLink>
                <NavLink to="/category/thor" className={({isActive}) => (isActive ? "active" : "noActive")}>
                    <li>Thor</li>
                </NavLink>
                <NavLink to="/category/spiderman" className={({isActive}) => (isActive ? "active" : "noActive")}>
                    <li>Spiderman</li>
                </NavLink>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </ul>
        </div>
    );
}

export default NavBar