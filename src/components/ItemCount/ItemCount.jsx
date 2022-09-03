import React, { useState} from 'react'
import "./itemCount.css"

function ItemCount(props) {
    
    const [items, setItems] = useState(1);

    const sumItems = () => {
        items < props.stock ? setItems(items + 1) : alert("No hay mas stock");
    }

    const restItems = () => {
        props.initial < items ? setItems(items - 1) : setItems(items); 
    }

    return (
    <div className="counter-container">
        <div className="counter">
            <button className="counter-button" onClick={restItems}>-</button>
            <p>{items}</p>
            <button className="counter-button" onClick={sumItems}>+</button>
        </div>
        <button className="counter-confirm-button" onClick={() => props.onAdd(items)}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount