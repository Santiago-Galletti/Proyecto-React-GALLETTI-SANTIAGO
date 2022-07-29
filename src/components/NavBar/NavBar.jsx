import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
    return (
        <div className="nav">
            <ul className="nav-list">
                <img className="nav-logo" src="http://assets.stickpng.com/images/585f9333cb11b227491c3581.png" alt="logo"></img>
                <li>Home</li>
                <li>Productos</li>
                <li>Nosotros</li>
                <li>FAQ</li>
                <CartWidget />
            </ul>
        </div>
    );
}

export default NavBar