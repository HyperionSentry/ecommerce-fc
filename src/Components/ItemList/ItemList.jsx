import React from 'react'
import Item from '../Item/Item'

function ItemList({products,state}) {

  return (
    <>
        { 
        state ? <h2>Buscando libros...</h2> : products.map( (prod) =>  Item(prod) ) 
        }
    </> 
    )
      
}

export default ItemList

