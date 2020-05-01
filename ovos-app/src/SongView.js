/* import React, {Component } from 'react'

class SongView extends Component{


renderSong = (song) => {
    if(song) {
    return(
        <div className="song" id={song.title + "-song"}>
          <h3>{song.title}</h3>
          <br/>
          Price: {song.price}
          <br/>
       </div>
      )
    }
}

render(){
    const song = this.props.songs.find(song => song.id == this.props.id)
    return(
       <div>
        { this.renderSong(song)}
      </div>
    )
  }

}
export default SongView */