import { getDocs, collection, addDoc, query, where, writeBatch, documentId } from "firebase/firestore";
import React, { useState, useContext} from 'react'
import db from '../../services/firebase';
import { cartContext } from '../CartContext/CartContext';
import "./checkout.css"
import swal from 'sweetalert';
import { Link } from 'react-router-dom';


function Checkout() {

    const { cartAmount } = useContext(cartContext);
    const { clearCart } = useContext(cartContext);
    const { totalPrice } = useContext(cartContext);

    const [orderStatus, setOrderStatus] = useState(false)

    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const ordenCompra = {
        buyer: {...userData},
        items: [...cartAmount],
        total: totalPrice,
        date: new Date()
    };
    
    async function handleSubmit (e) {
        e.preventDefault();
        const newCollection = collection(db, "orders");
        const orden = await addDoc(newCollection, ordenCompra);
        clearCart();
        setOrderStatus(orden.id);

        const collectionProductos = collection(db, "peliculas");

        const cartIds = cartAmount.map((item) => item.id);

        const q = query(collectionProductos, where(documentId(), "in", cartIds));

        let batch = writeBatch(db);

        getDocs(q).then((response) => {
            response.docs.forEach((doc) => {
                const itemToUpdate = cartAmount.find((item) => item.id === doc.id);
                if (doc.data().stock >= itemToUpdate.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad,
                });
                }
                batch.commit();
            });
        });    
    };

    function handleReset (e) {
        setUserData({
            name: "",
            phone: "",
            email: ""
        })
    };

    function handleInputChange (e) {
        let input = e.target;
        let value = input.value;
        let inputName = input.name;
        let copyUserData = {...userData};
        copyUserData[inputName] = value;
        setUserData(copyUserData);
    };

    if (orderStatus) {
        return swal("Listo!", `Tu codigo de orden es: ${orderStatus}, te va llegar un mail a ${userData.email}`, "success") &&
        (
            <div className='cartError'>
                <p>Te quedaste con ganas de algo mas?</p>
                <Link to="/">Volve a ver nuestros productos!</Link>
            </div>
        )
    };
    
    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit} onReset={handleReset}>
                <div className="form-section">
                    <label>Nombre</label>
                    <input type="text" name="name" value={userData.name} onChange={handleInputChange} className='form-input' placeholder="Pedro Rivera" required/>
                </div>
                <div className="form-section">
                    <label>Telefono</label>
                    <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} className='form-input' placeholder="11 9490-8439" required/>
                </div>
                <div className="form-section">
                    <label>Email</label>
                    <input type="email" name="email" value={userData.email} onChange={handleInputChange} className='form-input' placeholder="pedro.rivera@gmail.com" required/>
                </div>
                <div className="form-buttons">
                    <button type="submit" className="form-buttons-comprar"> Finalizar Compra</button>
                    <button type="reset" className="form-buttons-resetear"> Reiniciar </button>
                </div>
            </form>
        </div>
    )
}

export default Checkout