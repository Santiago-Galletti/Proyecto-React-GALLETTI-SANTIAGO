import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import infoProducts from "../ItemListContainer/ItemListContainer";
import "./itemDetailContainer.css"

const productoEncontrado = [
    {
    id : "2",
    name : "Thor: Love and Thunder",
    img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg",
    price : "$1500",
    stock : 8
    }
];

function getItemdetail () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productoEncontrado[0])
        }, 3000)
    })
}

function ItemDetailContainer() {
    const [detail, setDetail] = useState([])

    useEffect(() => {
        getItemdetail().then(item => {
            setDetail(item)
        })
    }, []);

    return (
        <div className="product-detail">
            <ItemDetail detail={detail} />
        </div>
    )
}

export default ItemDetailContainer