import React, {useEffect, useState} from 'react';
import "./itemDetail.css"


function ItemDetail({name, img, price}) {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p>Esta pelicula fue estrenada en el año 2019, a cargo del prestigioso director Kevin Feige, quien recibio montones de premios gracias al exito en taquilla de esta pelicula</p>
            <img className="product-card-img" src={img} alt="image"/>
            <p>{price}</p>
        </div>
    )
}

export default ItemDetail