import React from 'react';
import "./itemDetail.css"
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { cartContext } from '../CartContext/CartContext';
import { Link } from "react-router-dom";

function ItemDetail(props) {

    const { addItem } = useContext(cartContext);
    const { cartAmount } = useContext(cartContext)

    function addToCart (count) {
        const itemToCart = props.detail;
        addItem(itemToCart, count);
    }

    return (
        <div className="product-container">
            <h2 className="product-title">{props.detail.name}</h2>
            <div className="product-info">
                <img className="product-detail-img" src={props.detail.img} alt="image"/>
                <div className="product-add">
                    <h3 className="description-title">ESTRENO ESPECIAL</h3>
                    <p className="description-paragraph">{props.detail.sinopsis}</p>
                    <ItemCount initial={1} stock={props.detail.stock} onAdd={addToCart}/>
                    { cartAmount.length > 0 && (<Link to="/cart" className="linkToCart">Terminar mi compra</Link>) }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail