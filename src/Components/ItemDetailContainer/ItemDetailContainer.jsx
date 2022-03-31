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
          if (categoriaTipo === undefined) {
              setProds([response.find(producto => producto.id === Number(detalleId))])             
          } else if (categoriaTipo === 'Todas'){
             setProds(response)
          } else {
            const result = response.filter(producto => producto.categoria === categoriaTipo);
            setProds(result)
          }
        })
        .catch( error => console.log(error) )
        .finally( () => setLoading(false) )
      
      }, [])

  return (
    <>
        {prods.map( (prod) =>  ItemDetail(prod))}
    </>
  )
}

export default ItemDetailContainer