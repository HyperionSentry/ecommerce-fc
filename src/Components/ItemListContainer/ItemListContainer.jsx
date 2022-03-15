import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({ greeting }) {
  return (
  <>
    <h1>{greeting}</h1>
    <ItemList />  
  </>                
  )
}

export default ItemListContainer