import {React, useEffect, useState} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {fetchBooks} from '../../fetchBooks/fetchBooks'
import { useParams } from 'react-router-dom'


function ItemListContainer({ greeting }) {

  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaTipo } = useParams ()

  useEffect(() => {
      fetchBooks
      .then( response => {
        if (categoriaTipo === 'Todas') {
          setProds(response)
          console.log(response);
        } else if (categoriaTipo !== undefined){
          const result = response.filter(producto => producto.categoria === categoriaTipo);
          console.log(result);
          setProds(result)
        } else {
          setProds(response)
          console.log(response);
        }
      } )
      .catch( error => console.log(error) )
      .finally( () => setLoading(false) )
    
    },[])  

  return (
  <>
    <h1>{categoriaTipo}</h1>
    <ItemList products={prods} state ={loading}/>  
  </>                
  )
}

export default ItemListContainer