import React, {Component } from 'react'

class Song extends Component{

  shouldComponentUpdate(nextProps, nextState){
    console.log("Checking if component should update");
    return nextProps.isInCart !== this.props.isInCart
  }

  componentDidUpdate(){
    console.log("UPDATED!")
  }

  render(){
    return(
      <div className="song" id={this.props.title + "-song"}>
        <h3>{this.props.title}</h3>
        <br/>
        Price: {this.props.price}
        <br/>
        {!this.props.isInCart && <button onClick={(e) => this.props.addToCart(this.props.id)}>Add To Cart</button>}
      </div>
    )
  }
}

//<img alt={this.props.title + " image"}src={this.props.image1}/> 
export default Song