import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'

function Cart() {

  const { cartList, emptyCart, deleteOne, sumaTotal } = useCartContext()
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
                <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
            </div>

        }
          {/* <button className='btn btn-outline-primary btn-block' onClick={emptyCart}>Vaciar Carrito</button> */}

    </div>
    
  )
}

export default Cart