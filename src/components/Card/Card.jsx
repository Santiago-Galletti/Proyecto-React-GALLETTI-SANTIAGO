import ItemCount from "../ItemCount/ItemCount"
import "./card.css"

function Card(props){
    console.log(props.data)
    return (
        <div className="product-card">
            <h3>{props.data.name}</h3>
            <img className="product-card-img" src={props.data.img} alt="image"/>
            <p>{props.data.price}</p>
            <ItemCount initial={1} stock={props.data.stock} />
        </div>
    )
}

export default Card