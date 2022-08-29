import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./itemListContainer.css"
import ItemList from "../ItemList/ItemList";
import db from '../../services/firebase';
import { getDocs, collection, query, where, getDoc } from 'firebase/firestore'

function getProducts () {
    return new Promise ((resolve) => {
        const productsCollection = collection(db, "peliculas");
        
        getDocs(productsCollection).then( snapshot => {
            const docsData = snapshot.docs.map( doc => {
                return { ...doc.data(), id: doc.id}
            });
            resolve(docsData);
        });
    });
};

function getProductsByCategory  ( categoryParam ) {
    return new Promise((resolve) => {
        const productsCollection = collection(db, "peliculas");
        const q = query(productsCollection, where("category", "==", categoryParam));
    
        getDocs(q).then( snapshot => {
            const docsData = snapshot.docs.map( doc => {
            return { ...doc.data(), id: doc.id}        
            });
            resolve(docsData);
        });
    });    
};


function ItemListContainer () {
    const [data, setData] = useState([])
    const categoryParam = useParams().category

    useEffect(() => {
            if(categoryParam === undefined){
                getProducts().then((response) => {
                    setData(response)
                });
            } 
            else {
                getProductsByCategory(categoryParam).then((response) => {
                    setData(response)
                });
            }     
    }, [categoryParam]);
    
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