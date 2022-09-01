import React, {useContext} from 'react'
import { cartContext } from '../CartContext/CartContext';

const sizeInfo = {fontSize: "1rem"};

function CartProduct({item}) {
    const { deleteItem } = useContext(cartContext);
    return (
        <div className='cartProducts'>
            <div className='cartProducts-info'>
                <img className="cartProducts-img" src={item.img} alt="image"/>
                <h3 style={{fontSize: "1.2rem"}}>{item.name}</h3>
                <p style={sizeInfo}>Precio: ${item.price}</p>
                <p style={sizeInfo}>Cantidad: {item.cantidad}</p>
                <p style={sizeInfo}>Precio total: ${item.price * item.cantidad}</p>
                <button onClick={() => deleteItem(item, item.cantidad)} className="buttonEliminar">X</button>
            </div>
        </div>   
    )
}
export default CartProduct