import React, { useContext} from 'react';
import CartProduct from '../CartProduct/CartProduct';
import "./cart.css"
import { cartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

function Cart() {

    const { cartAmount } = useContext(cartContext);
    const { clearCart } = useContext(cartContext);
    const { totalPrice } = useContext(cartContext);

    if(cartAmount.length < 1) {
        return(
            <div className='cartError'>
                <p>No hay productos en el carrito</p>
                <Link to="/">Ver productos</Link>
            </div>
        )
    }

    return (
        <div className='cartDisplay'>
            { cartAmount.map( item => <CartProduct key={item.key} item={item} /> )}
            <p className='total'>Total: ${totalPrice}</p>
            <Link to="/checkout" className="buttonCheckout">Checkout</Link>
            <button onClick={() => clearCart()} className="buttonEliminar">Limpiar el carrito</button>
        </div>
    )
}

export default Cart