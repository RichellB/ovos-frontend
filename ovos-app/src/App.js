import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './Header'
import SongsContainer from './SongsContainer'
import CartContainer from './CartContainer'
import SongForm from './SongForm'



class App extends React.Component {

  state = {
    songs: [],
    cart: []
  }
  
  render(){
    return (
        <div className="App">
          <Header changeView={this.changeView}/>
            <Route exact path="/" render={()=>  <h1>WELCOME TO THE OVOS (ONE VOICE ONE SOUND)!</h1>}/>
            <Route exact path='/songs' component={() => <SongsContainer />} />
            <Route path='/cart' component={() => <CartContainer cart={this.state.cart}/>}/>
            <Route exact path='/songs/new' render={() => <SongForm />} />          
        </div>
    )};
}

export default App;