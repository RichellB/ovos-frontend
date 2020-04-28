import React from 'react'
// import {withRouter} from 'react-router-dom'

class SongForm extends React.Component{

  state={
    title: "",
    album: "",
    price: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const requestObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ song: this.state })
    }

    fetch("http://localhost:3001/items", requestObj)
      .then(res => res.json())
      .then(song => {
        this.props.addToSongs(song)
        this.props.history.push('/songs')
      })
  }

  render(){
    return (
      <div id="search-bar">
        <h2>Add a New Song:</h2>

          Name: <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input><br/>
          Release Year: <input type="text" name="year" value={this.state.year} onChange={this.handleChange}></input><br/>
          Price: <input type="number" name="price" value={this.state.price} onChange={this.handleChange}></input><br/>
          
          <input type="submit" value="Create Song" onClick={this.handleSubmit}></input>


      </div>
    )
  }
}

export default SongForm