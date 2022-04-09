import React from 'react'
import Item from '../Item/Item'
import { ProgressBar } from 'loading-animations-react';
import './ItemList.css'

function ItemList({products,state}) {

  return (
    <>
        { 
          state 
          
          ? 

            <ProgressBar borderColor="white" sliderColor="#5a58bfe0" sliderBackground="rgb(0,0,0)" className="progressBar" text="Buscando libros" />

          : 
          <div class="container">

          {products.map((prod)=>{
              return (
              <div key={prod.id}>
                <Item prod={prod} loading={state}/>
              </div> 
              )
              } 
            )
          }
          </div>

          }
    </> 
    )
      
}

export default ItemList

