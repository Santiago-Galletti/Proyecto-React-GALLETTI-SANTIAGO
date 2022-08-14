import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./itemListContainer.css"
import ItemList from "../ItemList/ItemList";
import data from "../../data/data";

function getProducts () {
    return new Promise ((resolve) => {
            resolve(data)
    })
}

function ItemListContainer () {
    const [data, setData] = useState([])
    const idCategory = useParams().category

    useEffect(() => {
        getProducts().then(item => {
            if(idCategory === undefined){
                setData(item)
            } 
            else {
                let filtrados = item.filter( film => film.category === idCategory);
                setData(filtrados)
            }     
        })
    }, []);
    
    return (
        <div className="main">
            <h2 className="title">Lo mejor del Universo Cinematografico de Marvel:</h2>
            <div>
                <ItemList data={data}/>
            </div>
        </div> 
    )
}

export default ItemListContainer