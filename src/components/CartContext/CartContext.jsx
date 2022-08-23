
import { createContext, useState } from 'react'

export const cartContext = createContext();

export function CartContextProvider ({children}){
    const [cartAmount, setCartAmount] = useState([]);

    function addItem(item, quantity) {
        let copyCart = [...cartAmount];
        let itemId = item.id;
        let alreadyExists = copyCart.some(item => item.id == itemId);
        if(alreadyExists === false){
            item.cantidad = quantity;
            copyCart.push(item);
        }
        else{
            let newQuantity = item.cantidad += quantity;
            item.cantidad = newQuantity;
        }
        setCartAmount(copyCart);
    }

    function deleteItem (item) {
        let itemId = item.id
        setCartAmount(cartAmount.filter(item => item.id !== itemId))
    }

    function clearCart () {
        setCartAmount([])
    }

    let totalQuantity = 0
    for(let i = 0; cartAmount.length > i; i++){
        totalQuantity += cartAmount[i].cantidad;
    }

    console.log(cartAmount)
    return(
        <cartContext.Provider value={ {cartAmount, addItem, deleteItem, clearCart, totalQuantity} }>
            {children}
        </cartContext.Provider>
    )
}
