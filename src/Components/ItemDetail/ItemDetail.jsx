import React from 'react'

function ItemDetail({item}) {
    const itemPrice = item.price

  return (
    <>
        <div>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <p>{item.detail}</p>
        </div>
    </>
  )
}

export default ItemDetail