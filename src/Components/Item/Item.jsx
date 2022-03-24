import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const addToCart = (prod) => {
  alert(`Se han agregado los libros al carrito.`)
  console.log(prod.id);
}


function Item(prod) {
  return (
    <div key={prod.id} className='col-md-4'>
    <div className='card w-100 mt-5'>
    <div className='card-header'>
        {`${prod.title} - ${prod.categoria}`}
    </div>
    <div className='card-body'>
        <img src={prod.pictureUrl} alt={prod.title} />
        <div className='cardPrice'>${prod.price}</div> 

    </div>
    <div className='card-footer'>
        <Link to ={`detalle/${prod.id}`}>
            <button className='btn btn-outline-primary btn-block'>Detalles del Producto</button>
        </Link>
        <ItemCount stock={5} initial= {1} onAdd={addToCart}/>
    </div>
    </div>
</div> 
    )
}

export default Item