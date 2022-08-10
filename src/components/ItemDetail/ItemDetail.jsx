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
                    <p className="description-paragraph">"Thor: Love and Thunder de Marvel Studios muestra al dios del Trueno en un viaje diferente a todo lo que ha enfrentado: una búsqueda de la paz interior. Pero el retiro de Thor se ve interrumpido por un asesino galáctico conocido como Gorr el dios Carnicero, que busca la extinción de los dioses. Para combatir la amenaza, Thor solicita la ayuda de rey Valkyrie, Korg y su exnovia Jane Foster, quien, para sorpresa de Thor, empuña inexplicablemente su martillo mágico, Mjölnir, como la Poderosa. Thor. Juntos, se embarcan en una angustiosa aventura cósmica para descubrir el misterio de la venganza del dios Carnicero y detenerlo antes de que sea demasiado tarde".</p>
                    <ItemCount initial={1} stock={props.detail.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail