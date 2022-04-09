import {React, useEffect, useState} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

function ItemListContainer({ greeting }) {

  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaTipo } = useParams ()

    
    useEffect(() => {
      const db = getFirestore()
      const queryCollection =  collection(db, 'items')
      const filterQuery = categoriaTipo ? query(queryCollection, where('categoria', '==', categoriaTipo)) : queryCollection
      getDocs(filterQuery)
      .then(response => setProds(response.docs.map( prod => ({ id: prod.id, ...prod.data() }) )))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    
    },[categoriaTipo]) 

  return (
  <>
    <h1>{categoriaTipo}</h1>
    <ItemList products={prods} state ={loading}/>  
  </>                
  )
}

export default ItemListContainer