import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {
    // const [prods, setProds] = useState([])
    const [prods, setProds] = useState({})
    const [loading, setLoading] = useState(true)
  
    const { detalleId } = useParams ()

    useEffect(() => {
      const db = getFirestore()
      const queryDoc = doc(db, 'items' , detalleId)
      getDoc(queryDoc)
      .then(resp => setProds( {id:resp.id, ...resp.data()}))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))

  }, [detalleId])
console.log(prods);
  return (
    <>
        <ItemDetail item={prods} state ={loading}/>

    </>
  )
}

export default ItemDetailContainer
