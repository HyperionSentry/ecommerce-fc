import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import './Cart.css'

function Cart() {

  const { cartList, emptyCart, deleteOne, sumaTotal } = useCartContext()

  const generarOrden = (e) => {
    e.preventDefault();

    let order = {}

    order.buyer = {name: 'Fer', email: 'fcaba@gmail.com', phone: '123456789'}
    order.total = sumaTotal()
    order.date = new Date()

    order.items = cartList.map( cartItem => {
      const id = cartItem.id
      const nombre = cartItem.title
      const precio = cartItem.price * cartItem.cantidad

      return {id, nombre, precio}
    } )
    console.log(order);
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, order)
    .then(({id}) => alert('Se ha genreado la orden de compra con ID: '+ id));

    cartList.map( cartItem => {
      const queryUpdate = doc(db, 'items', cartItem.id)
      let newStock = 0

      if (cartItem.stock > 0) {
        newStock = cartItem.stock - cartItem.cantidad
      } 
      updateDoc(queryUpdate, {
        stock: newStock
      })
    } )
    emptyCart()
  }

  return (
    <div>
        {
          (cartList.length === 0)
          &&
          <div>
              <p>No hay items en tu carrito...</p>
              <Link to='/'>
                  <button className='btn btn-outline-primary btn-block'>Continuar comprando</button>
              </Link>
          </div>
        }   

      { cartList.map(prod => 
      <div>
      <div key={prod.id} className='col-md-4'>
        <div className='card w-100 mt-5'>
          <div className='card-header'>
              {`${prod.title} - Cantidad: ${prod.cantidad}`}
          </div>
          <div className='card-body'>
              <img src={prod.pictureUrl} alt={prod.title} />
          </div>
          <button className="btn-sm btn-danger" onClick={() => deleteOne(prod.id)}>
             Eliminar
          </button>
        </div>
      </div>
      </div>
    ) }

{
            (cartList.length >= 1)
            
            &&

            <div>
                <h4> Total: ${sumaTotal()} </h4>
                
                <button className="btn btn-danger cartButton" onClick={emptyCart}> Vaciar carrito</button>
                <button className="btn btn-primary cartButton" onClick={generarOrden}> Generar Orden </button>
                
            </div>

        }

    </div>
    
  )
}

export default Cart