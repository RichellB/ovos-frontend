import React from 'react'

import Countdown from './Countdown'

function CartContainer(props){

  function showSongs(){
    return props.cart.map(song => {
      return (
        <div key={song.id}>
        Song: {song.name}
        <br/>
        Price: {song.price}
        <br/>
        </div>
      )})
    }

    return(
        <div id="cart-container">
          <Countdown/>
          {props.cart.length === 0 ? <h3>Cart is empty!</h3> : showSongs()}
        </div>
      )
}

export default CartContainer;