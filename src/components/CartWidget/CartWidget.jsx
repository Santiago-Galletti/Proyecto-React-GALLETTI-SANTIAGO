import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css"

function CartWidget() {
    console.log(iconList);
    
    return (
        <div>
            <FontAwesomeIcon className="icon" icon= { faCartShopping } />
        </div>
    )
}

export default CartWidget