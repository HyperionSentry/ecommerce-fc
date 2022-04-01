import {React, useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {fetchBooks} from '../../fetchBooks/fetchBooks'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [prods, setProds] = useState([])
    const [loading, setLoading] = useState(true)
  
    const { detalleId } = useParams ()

    useEffect(() => {
        fetchBooks
        .then( response => {setProds(response.find(producto => producto.id === Number(detalleId)))
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
  
    }, [])

  return (
    <>
        <ItemDetail item={prods} />

    </>
  )
}

export default ItemDetailContainer
