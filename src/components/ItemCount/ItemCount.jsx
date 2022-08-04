import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./itemCount.css"

function ItemCount(props) {
    
    const [items, setItems] = React.useState(1);

    const sumItems = () => {
        items < props.stock ? setItems(items + 1) : alert("No hay mas stock");
    }

    const restItems = () => {
        props.initial < items ? setItems(items - 1) : setItems(items); 
    }

    const onAdd = () => {
        alert("Tu productos han sido añadidos al carrito!");
    }

    return (
    <div className="hola">
        <div className="counter">
            <button className="counter-button" onClick={restItems}>-</button>
            <p>{items}</p>
            <button className="counter-button" onClick={sumItems}>+</button>
        </div>
        <button className="counter-confirm-button" onClick={onAdd}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount