import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './Header'
import SongsContainer from './SongsContainer'
import CartContainer from './CartContainer'
import SongForm from './SongForm'
import SongView from './SongView'
import Song from './Song'



class App extends React.Component {

  state = {
    songs: [],
    cart: []
  }

  componentDidMount(){
    fetch("http://localhost:3001/songs")
      .then(res => res.json())
      .then(songs => this.setState({songs}))
  }

  addToCart = (id) => {
    let song = this.state.songs.find(song => song.id === id)
    this.setState(prevState => {
      return ({cart: [...prevState.cart, song]})
    }, () => console.log(this.state))
  }

  addToSongs = (song) => {
    this.setState(prevState => {
      return ({songs: [...prevState.songs, song]})
    })
  }



  render(){
    return (
      <div className="App">
        <Header changeView={this.changeView}/>
        <Switch>
          <Route exact path='/songs' component={() => <SongsContainer addToCart={this.addToCart} cart={this.state.cart} songs={this.state.songs}  />} />
          <Route path='/cart' component={() => <CartContainer cart={this.state.cart}/>}/>
          <Route exact path='/songs/new' render={() => <SongForm addToSongs={this.addToSongs}/>} />          
          <Route exact path='/songs/:id' component={({match} ) => <SongView songs={this.state.songs} match={match} id={match.params.id}/>}/>
          <Route exact path="/" render={()=><h1>OVOS (ONE VOICE ONE SOUND)!</h1>}/>
        </Switch>
      </div>
    )};
}

export default App;