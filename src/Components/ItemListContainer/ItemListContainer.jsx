import {React, useEffect, useState} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {fetchBooks} from '../../fetchBooks/fetchBooks'


function ItemListContainer({ greeting }) {

  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      fetchBooks
      .then( response => setProds(response) )
      .catch( error => console.log(error) )
      .finally( () => setLoading(false) )
    
    }, [])  

  return (
  <>
    <h1>{greeting}</h1>
    <ItemList products={prods} state ={loading}/>  
  </>                
  )
}

export default ItemListContainer