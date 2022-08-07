import React, {useEffect, useState} from 'react'
import "./itemListContainer.css"
import ItemList from "../ItemList/ItemList";

const infoProducts = [
    {
        id : "1",
        name : "Spiderman: No way Home",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
        price : "$1000",
        stock : 5
    },
    {
        id : "2",
        name : "Thor: Love and Thunder",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg",
        price : "$1500",
        stock : 8
    },
    {
        id : "3",
        name : "Avengers: Endgame",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg",
        price : "$1800",
        stock : 10
    }
];

function getProducts () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(infoProducts)
        }, 2000)
    })
}

function ItemListContainer () {
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts().then(item => {
            setData(item)
        })
    }, []);
    
    return (
        <div className="main">
            <h2 className="title">Nuestros productos disponibles:</h2>
            <div>
                <ItemList data={data}/>
            </div>
        </div> 
    )
}

export default ItemListContainer