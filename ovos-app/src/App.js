import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  componentDidMount(){
    fetch("http://localhost:3000/songs")
      .then(res => res.json())
      .then(songs => this.setState({songs}))
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

render(){
  return (
    <div className="App">
      <Header changeView={this.changeView}/>
      {this.state.page === "Songs" ? <SongsContainer addToCart={this.addToCart} cart={this.state.cart} songs={this.state.songs}/> : <CartContainer cart={this.state.cart}/>}

    </div>
  )};
}

export default App;
