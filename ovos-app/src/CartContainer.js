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
}

export default CartContainer;