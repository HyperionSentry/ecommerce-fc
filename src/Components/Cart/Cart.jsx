import React from 'react'
import { useCartContext } from '../../Context/CartContext'

function Cart() {

  const { cartList, emptyCart } = useCartContext()

  return (
    <div>
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
        </div>
      </div>
      </div>
    ) }
          <button className='btn btn-outline-primary btn-block' onClick={emptyCart}>Vaciar Carrito</button>

    </div>
    
  )
}

export default Cart