import {React, useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {fetchBooks} from '../../fetchBooks/fetchBooks'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [prods, setProds] = useState([])
    const [loading, setLoading] = useState(true)
  
    const { detalleId, categoriaTipo } = useParams ()

    useEffect(() => {
        fetchBooks
        .then( response => {
          if (categoriaTipo == undefined) {
            setProds(response.find(producto => producto.id === Number(detalleId)))
          }else{
            setProds(response.find(producto => producto.categoria === categoriaTipo))
          }
        })
        .catch( error => console.log(error) )
        .finally( () => setLoading(false) )
      
      }, [])
      console.log(prods);

  return (
    <div>
        <ItemDetail item = {prods} />
    </div>
  )
}

export default ItemDetailContainer