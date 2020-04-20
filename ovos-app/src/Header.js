import React from 'react'

function Header(props){
  return(
    <div id="header">
      <h1 onClick={(e) => props.changeView("Songs")}>OVOS Music Library</h1>
      <button onClick={(e) => props.changeView("Cart")}> View Cart</button>
    </div>
  )
}

export default Header