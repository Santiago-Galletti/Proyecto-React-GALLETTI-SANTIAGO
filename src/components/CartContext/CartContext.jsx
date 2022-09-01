
import { createContext, useState } from 'react'

export const cartContext = createContext();

export function CartContextProvider ({children}){
    const [cartAmount, setCartAmount] = useState([]);

    function addItem(item, quantity) {
        if(quantity > item.stock){
            alert("No hay suficiente stock, agregue menos productos")
        }
        else{
            let copyCart = [...cartAmount];
            let itemId = item.id;
            item.stock = item.stock - quantity;
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
    }

    function deleteItem (item, quantity) {
        let itemId = item.id
        item.stock = item.stock + quantity;
        setCartAmount(cartAmount.filter(item => item.id !== itemId))
    }

    function clearCart () {
        setCartAmount([])
    }

    let totalQuantity = 0
    for(let i = 0; cartAmount.length > i; i++){
        totalQuantity += cartAmount[i].cantidad;
    }

    
    let totalPrice = 0;
    for(let i = 0; cartAmount.length > i; i++){
        let precioTotal = cartAmount[i].price;
        let cantidadTotal = cartAmount[i].cantidad;
        totalPrice += precioTotal * cantidadTotal;
    }

    console.log(cartAmount)
    return(
        <cartContext.Provider value={ {cartAmount, addItem, deleteItem, clearCart, totalQuantity, totalPrice} }>
            {children}
        </cartContext.Provider>
    )
}
