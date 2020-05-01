import React from 'react'
import {createSong} from './songActions'
import {connect} from 'react-redux'
 // import {withRouter} from 'react-router-dom'

class SongForm extends React.Component{

  state={
    title: "",
    year: "",
    price: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    let song = this.state
    this.props.createSong(song)
    this.setState({
        title: "",
        year: "",
        price: ""
    })
  }

  render(){
    return (
      <div id="search-bar">
        <h2>Add a New Song:</h2>

          Title: <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input><br/>
          Release Year: <input type="text" name="year" value={this.state.year} onChange={this.handleChange}></input><br/>
          Price: <input type="number" name="price" value={this.state.price} onChange={this.handleChange}></input><br/>
          
          <input type="submit" value="Create Song" onClick={this.handleSubmit} ></input>


      </div>
    )
  }
}

export default connect(null,{createSong})(SongForm)