import React, {useEffect, useState} from 'react';
import "./cart.css"
import { useContext } from 'react';
import { cartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

function Cart() {

    const { cartAmount } = useContext(cartContext);
    const { deleteItem } = useContext(cartContext);
    const { clearCart } = useContext(cartContext);

    return (
        <div className='cartDisplay'>
            <button onClick={() => clearCart()} className="buttonEliminar">Limpiar el carrito</button>
            { cartAmount.length >= 1 ? (    
            cartAmount.map((item) => {
                return (
                    <div className='cartProducts'>
                        <img className="cartProducts-img" src={item.img} alt="image"/>
                        <div className='cartProducts-info'>
                            <h3 style={{fontSize: "1.2rem"}}>{item.name}</h3>
                            <p style={{fontSize: "0.8rem"}}>Precio: ${item.price}</p>
                            <p style={{fontSize: "0.8rem"}}>Cantidad: {item.cantidad}</p>
                            <p style={{fontSize: "1rem"}}>Precio total: ${item.price * item.cantidad}</p>
                            <button onClick={() => deleteItem(item, item.cantidad)} className="buttonEliminar">Eliminar del carrito</button>
                        </div>
                    </div>
                )
            }))
            :
            (<div className='cartError'>
                <p>No hay productos en el carrito</p>
                <Link to="/">Ver productos</Link>
            </div>)
            }
        </div>
    )
}

export default Cart