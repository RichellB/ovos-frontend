import React from 'react'

import Song from './Song'
import FilterBar from './FilterBar'

class SongsContainer extends React.Component{

  isInCart(id) {
    return this.props.cart.find(song => song.id === id) ? true : false
  }

  render(){
    return(
      <div id="songs-container">
      {this.props.songs.map((song) => <Song key={song.id} id=
        {song.id} name={song.title} image1={song.image1} image2={song.image2} price={song.price} addToCart={this.props.addToCart} isInCart={this.isInCart(song.id)}/>)}
      </div>
    )
  }
}