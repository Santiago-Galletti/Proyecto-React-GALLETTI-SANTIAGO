import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css"
import { useContext } from 'react';
import { cartContext } from '../CartContext/CartContext';

function CartWidget() {
    console.log(iconList);
    const { cartAmount } = useContext(cartContext)
    const { totalQuantity } = useContext(cartContext)
    
    return (
        <div className="cartWidget">
            <FontAwesomeIcon icon= { faCartShopping } />
            { cartAmount.length > 0 && (<p>{totalQuantity}</p>) }
        </div>
    )
}

export default CartWidget