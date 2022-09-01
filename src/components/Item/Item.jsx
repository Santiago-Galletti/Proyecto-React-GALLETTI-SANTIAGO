import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

const Item = ({ id, name, img, price }) => {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <img className="product-card-img" src={img} alt="image"/>
            <p>${price}</p>
            <Link to={`/detalle/${id}`} className="purchaseButton">Ver mas</Link>
        </div>
    )
}

export default Item