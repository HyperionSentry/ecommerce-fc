import  { useState } from 'react'
import  { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount' 
import { ProgressBar } from 'loading-animations-react';
import './ItemDetail.css'

const FinalAddToCart = () => {
  return (
    <div className="mt-5">
      <Link to='/cart'>
        <button className="btn btn-outline-primary mx-2">Finalizar</button>
     </Link>
      <Link to='/'>
         <button className="btn btn-outline-primary mx-2">Continuar Comprando</button>
      </Link>
    </div>

  )
}

function ItemDetail({item,state}) {
  const {addToCart} = useCartContext()

  const onAdd = (cant) => {
    setinputType('addToCartButton')
    addToCart({...item,  cantidad: cant})
  }
  const [inputType, setinputType] = useState('ItemCountButton')

  return (
    <>
        { 
        state ? 
        
        <ProgressBar
        borderColor="white"
        sliderColor="#5a58bfe0"
        sliderBackground="rgb(0,0,0)"
        className="progressBar"
        text="Cargando Detalle"
      />

        : 

        <div className='itemDetail'>
            <h1>{item.title}</h1>
            <h2>${item.price}</h2>
            <img src={item.pictureUrl} alt={item.title} className="itemImgDetail"/>
            <p>{item.detail}</p>
            {
              inputType === 'ItemCountButton' ?
                <ItemCount stock={item.stock} initial= {1} onAdd={onAdd}/>
              :
                <FinalAddToCart/>
            }
        </div>
        }  
    </>
  )
}

export default ItemDetail