import React, {useEffect, useState} from 'react';
import "./itemDetail.css"
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail(props) {

    const [filmsInCart, setFilmsInCart] = useState(0);

    function addToCart (items) {
        setFilmsInCart(items)
    }

    return (
        <div className="a">
            <h2 className="product-title">{props.detail.name}</h2>
            <div className="b">
                <img className="product-detail-img" src={props.detail.img} alt="image"/>
                <div className="c">
                    <h3 className="description-title">ESTRENO ESPECIAL</h3>
                    <p className="description-paragraph">{props.detail.sinopsis}</p>
                    { filmsInCart === 0 ? 
                        <ItemCount initial={1} stock={props.detail.stock} onAdd={addToCart}/>
                        :
                        <a href="/cart">VER CARRITO</a>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail