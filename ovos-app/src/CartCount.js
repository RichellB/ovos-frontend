import React from 'react'

class CartCount extends React.Component{

  state = {
    countdown: 90,
    interval: null
  }

  componentDidMount(){
    let interval = setInterval(this.countDown, 1000)
    //this.setState({interval: interval})
    this.setState({interval})
  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
  }
}

export default CartCount