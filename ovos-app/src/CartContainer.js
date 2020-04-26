import React from 'react'

import CartCount from './CartCount'

function CartContainer(props){

  function showSongs(){
    return props.cart.map(song => {
      return (
        <div key={song.id}>
        Song: {song.title}
        <br/>
        Price: {song.price}
        <br/>
        </div>
      )})
    }

    return(
        <div id="cart-container">
          <CartCount/>
          {props.cart.length === 0 ? <h3>Cart is empty!</h3> : showSongs()}
        </div>
      )
}

export default CartContainer;