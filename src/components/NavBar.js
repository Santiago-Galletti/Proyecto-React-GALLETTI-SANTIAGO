import "./navbar.css";

function NavBar(){
    return (
        <div className="nav">
            <ul className="nav-list">
                <img className="nav-logo" src="http://assets.stickpng.com/thumbs/585f9333cb11b227491c3581.png" alt="logo"></img>
                <li>Home</li>
                <li>Productos</li>
                <li>Nosotros</li>
                <li>FAQ</li>
            </ul>
        </div>
    );
}

export default NavBar