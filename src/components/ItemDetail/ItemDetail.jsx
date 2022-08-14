import React, {useEffect, useState} from 'react';
import "./itemDetail.css"
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail(props) {
    return (
        <div className="a">
            <h2 className="product-title">{props.detail.name}</h2>
            <div className="b">
                <img className="product-detail-img" src={props.detail.img} alt="image"/>
                <div className="c">
                    <h3 className="description-title">ESTRENO ESPECIAL</h3>
                    <p className="description-paragraph">{props.detail.sinopsis}</p>
                    <ItemCount initial={1} stock={props.detail.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail