import  { useState } from 'react'
import  { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount' 


const FinalAddToCart = () => {
  return (
    <div className="mt-5">
      <Link to='/cart'>
        <button className="btn btn-outline-primary mx-2" onClick={ console.log('Finalizar')}>Finalizar</button>
     </Link>
      <Link to='/'>
         <button className="btn btn-outline-primary mx-2" onClick={ console.log('Continuar Comprando')}>Continuar Comprando</button>
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

        state ? <h2>Cargando detalle...</h2> 
        
        : 
        
        <div>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <img src={item.pictureUrl} alt={item.title} />
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