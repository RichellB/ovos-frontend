import React, {Component } from 'react'

class Song extends Component{

  shouldComponentUpdate(nextProps, nextState){
    console.log("Checking if component should update");
    return nextProps.isInCart !== this.props.isInCart
  }

  componentDidUpdate(){
    console.log("UPDATED!")
  }
}