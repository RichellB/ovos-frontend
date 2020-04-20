import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
         HIIII
        </p>

    </div>
  );
}


state = {
  page: "Songs",
  songs: [],
  cart: [],
  term: ""
}

changeView = (page) => {
  console.log(this);
  //this.setState({page: "Cart"})
  this.setState({page})
}

addToCart = (id) => {
  let song = this.state.songs.find(song => song.id === id)
  this.setState(prevState => {
    return ({cart: [...prevState.cart, song]})
  }, () => console.log(this.state))
}


export default App;
