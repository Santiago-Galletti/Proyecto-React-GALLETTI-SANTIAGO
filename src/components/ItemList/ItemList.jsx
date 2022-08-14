import React, {useEffect, useState} from 'react'
import "./itemList.css"
import Item from "../Item/Item"

function ItemList(props) {
    return (
        <div className="productsDisplay">
            {
            props.data.map((item) => {
                return (<Item
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                stock={item.stock}
                />
                )
            })
            }
        </div>
    )
}

export default ItemList