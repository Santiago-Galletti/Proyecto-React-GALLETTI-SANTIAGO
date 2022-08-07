import React, {useEffect, useState} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import "./item.css"

const Item = ({name, img, price, stock}) => {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <img className="product-card-img" src={img} alt="image"/>
            <p>{price}</p>
            <ItemCount initial={1} stock={stock} />
        </div>
    )
}

export default Item