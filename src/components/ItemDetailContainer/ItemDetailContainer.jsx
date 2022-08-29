import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import "./itemDetailContainer.css"
import { useParams } from 'react-router-dom'
import db from '../../services/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';


function ItemDetailContainer() {

    const idURL = useParams().id

    function getItemDetail (id) {
        return new Promise ((resolve) => {
            const productsCollection = collection(db, "peliculas");
            const productDetail = doc(productsCollection, id);
            
            getDoc(productDetail).then( snapshot => {
                resolve(
                    { ...snapshot.data(), id: snapshot.id}
                );
            });
        });
    };

    const [detail, setDetail] = useState([])
    useEffect(() => {
        getItemDetail(idURL).then(item => {
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