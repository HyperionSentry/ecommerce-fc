import  { React, useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount' 
import  { Link } from 'react-router-dom'

const FinalAddToCart = () => {
  return (
    <Link to='/cart'>
        <button className="btn btn-outline-primary" onClick={ console.log('Ir al carrito')}>Ir al carrito</button>
    </Link>
  )

}


function ItemDetail({item}) {

  const addToCart = () => {
    //alert(`Se han agregado los libros al carrito.`)
    setAmountBooks(1)
    console.log(amountBooks);
    setinputType('addToCartButton')
  }
  const [inputType, setinputType] = useState('ItemCountButton')
  const [amountBooks, setAmountBooks] = useState(1)

 


  return (
    <>
        <div>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.detail}</p>
            {
              inputType === 'ItemCountButton' ?
                <ItemCount stock={item.stock} initial= {amountBooks} addToCart={addToCart}/>
              :
                <FinalAddToCart/>
            }

        </div>
    </>
  )
}

export default ItemDetail


// Hago click en onAdd y guardo en un estado la cantidad de elementos, 
//desaparezco el ItemCount y hago aparecer un boton que diga Terminar mi compra que vaya hacia /cart