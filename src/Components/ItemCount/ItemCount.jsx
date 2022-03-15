import {React, useState } from 'react'
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


 
  return (
    <div className="counter">
    <div className="btn__container">      
      <button className="btn btn-outline-primary btn-block" onClick={increase}>+</button>
      <span className="counter__output">{counter}</span>
      <button className="btn btn-outline-primary btn-block" onClick={decrease}>-</button>
    </div>
    <button className='btn btn-outline-primary btn-block' onClick={onAdd}>Agregar al carrito</button>
  </div>
  )
}

export default ItemCount