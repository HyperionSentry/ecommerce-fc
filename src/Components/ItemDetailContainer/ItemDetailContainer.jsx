import {React, useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {fetchBooks} from '../../fetchBooks/fetchBooks'

function ItemDetailContainer() {
    const [prods, setProds] = useState({})
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
        fetchBooks
        .then( response => setProds(response.find(producto => producto.id === 1)))
        .catch( error => console.log(error) )
        .finally( () => setLoading(false) )
      
      }, [])


  return (
    <div>
        <ItemDetail item = {prods} />
    </div>
  )
}

export default ItemDetailContainer