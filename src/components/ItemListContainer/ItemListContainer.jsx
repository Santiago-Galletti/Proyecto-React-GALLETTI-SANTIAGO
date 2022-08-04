import "./itemListContainer.css"
import Card from "../Card/Card";

const infoProducts = [
    {
        id : "1",
        name : "Spiderman: No way Home",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
        price : "$1000",
        stock : 5
    },
    {
        id : "2",
        name : "Thor: Love and Thunder",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg",
        price : "$1500",
        stock : 8
    },
    {
        id : "3",
        name : "Avengers: Endgame",
        img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg",
        price : "$1800",
        stock : 10
    }
];

function ItemListContainer(){
    return (
        <div className="main">
            <h2 className="title">Nuestros productos disponibles:</h2>
            <div className="productsDisplay">
                <Card data={infoProducts[0]}/>
                <Card data={infoProducts[1]}/>
                <Card data={infoProducts[2]}/>
            </div>
        </div> 
    )
}

export default ItemListContainer