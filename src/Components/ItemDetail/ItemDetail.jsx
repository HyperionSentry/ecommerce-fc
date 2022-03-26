import React from 'react'

function ItemDetail({item}) {

  return (
    <>
        <div>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.detail}</p>
        </div>
    </>
  )
}

export default ItemDetail