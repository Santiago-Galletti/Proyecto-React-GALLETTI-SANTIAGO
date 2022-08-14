import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import data from "../../data/data";
import "./itemDetailContainer.css"
import { useParams } from 'react-router-dom'



function ItemDetailContainer() {

    const idURL = useParams().id

    function getItemdetail () {
        return new Promise ((resolve, reject) => {
            let filmRequested = data.find( film => film.id == idURL);
            filmRequested === undefined ? reject("Disculpe, por el momento no tenemos esa pelicula") : resolve(filmRequested)
        })
    }

    const [detail, setDetail] = useState([])
    useEffect(() => {
        getItemdetail().then(item => {
            setDetail(item)
        })
        .catch((error) => alert(error)) 
    }, []);

    return (
        <div className="product-detail">
            <ItemDetail detail={detail} />
        </div>
    )
}

export default ItemDetailContainer