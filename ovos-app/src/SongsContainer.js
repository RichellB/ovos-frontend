import React from 'react'

import Song from './Song'
import FilterContainer from './FilterContainer'

class SongsContainer extends React.Component{

  isInCart(id) {
    return this.props.cart.find(song => song.id === id) ? true : false
  }

  render(){
    return(
      <div id="songs-container">
        {this.props.songs.map((song) => <Song key={song.id} song={song} addToCart={this.props.addToCart} isInCart={this.isInCart(song.id)}/>)}
      </div>
    )
  }
}

export default SongsContainer 