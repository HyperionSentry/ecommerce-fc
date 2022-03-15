import {React, useEffect, useState} from 'react'
import Item from '../Item/Item'
import {fetchBooks} from '../../fetchBooks/fetchBooks'

function ItemList() {

const [prods, setProds] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
    fetchBooks
    .then(response => setProds(response))
    .catch(error => console.log(error))
    .finally(()=>setLoading(false))
  
  }, [])


  return (
    <>
        { 
        loading ? <h2>Buscando libros...</h2> : prods.map( (prod) =>  Item(prod) ) 
        }
    </> 
    )
      
}

export default ItemList

