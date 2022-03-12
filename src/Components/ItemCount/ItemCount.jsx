import {React, useState } from 'react'
import './ItemCount.css'
import book from '../../img/harry-potter-y-el-misterio-del-principe-harry-potter-6.jpg';


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
    <h1>Agregar al carrito</h1>
    <img src={book} alt="book image" className="book__img"/>
    <div className="btn__container">      
      <button className="control__btn" onClick={increase}>+</button>
      <span className="counter__output">{counter}</span>
      <button className="control__btn" onClick={decrease}>-</button>
    </div>
    <button className="buy" onClick={onAdd}>Agregar al carrito</button>
  </div>
  )
}

export default ItemCount