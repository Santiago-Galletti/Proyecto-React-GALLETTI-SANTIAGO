import React, {useContext} from 'react'
import { cartContext } from '../CartContext/CartContext';

function CartProduct({item}) {
    const { deleteItem } = useContext(cartContext);
    return (
        <div className='cartProducts'>
            <div className='cartProducts-info'>
                <img className="cartProducts-img" src={item.img} alt="image"/>
                <h3 className='cartProducts-title'>{item.name}</h3>
                <p className='cartProducts-description'>Precio: ${item.price}</p>
                <p  className='cartProducts-description'>Cantidad: {item.cantidad}</p>
                <p  className='cartProducts-description'>Precio total: ${item.price * item.cantidad}</p>
                <button onClick={() => deleteItem(item, item.cantidad)} className="buttonEliminar">X</button>
            </div>
        </div>   
    )
}
export default CartProduct