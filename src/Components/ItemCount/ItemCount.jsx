import {React, useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemCount.css'


function ItemCount({ stock, initial, onAdd}) {
    const [counter, setCounter] = useState(Number(initial))

    //Incrementar contador
    const increase = () => {
      if (counter < stock) {
        setCounter (counter + 1)
      }
    }

    //Decrementar contador 
    const decrease = () => {
      if(counter > 1){
        setCounter (counter - 1)
      }
    }

    const add = () => {
      onAdd(counter)
  }

 
  return (
    <>
      {
      (stock > 0)
      
      ?

      <div className="counter">
        <div className="btn__container">      
          <button className="btn btn-outline-primary btn-block" onClick={increase}>+</button>
          <span className="counter__output">{counter}</span>
          <button className="btn btn-outline-primary btn-block" onClick={decrease}>-</button>
       </div>
       <button className='btn btn-outline-primary btn-block' onClick={add}>Agregar al carrito</button>
      </div>
      :
      <div>
        <h3>Temporalmente sin stock</h3>
      <Link to='/'>
        <button className='btn btn-outline-primary btn-block'>Continuar comprando</button>
       </Link>
      </div>
      }
    </>

  
  )
}

export default ItemCount