import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import infoProducts from "../ItemListContainer/ItemListContainer";
import "./itemDetailContainer.css"

const productoEncontrado = infoProducts[0];

function getItemDetail () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productoEncontrado)
        }, 3000)
    })
}

function ItemDetailContainer() {
    const [detail, setDetail] = useState([])

    useEffect(() => {
        getItemDetail().then(item => {
            setDetail(item)
        })
    }, []);

    return (
        <div className="product-detail">
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer