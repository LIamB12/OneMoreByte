import React from 'react'
import "./style.css"
import sdg2 from "./sdg2.png"
import tr from "./transparent copy.png"
import sdg3 from "./sdg3.png"
import sdg13 from "./sdg13.png"

const Restaurants = (props) => {
  return (
    <>
        <div class="header">
        <img src={tr} />
        <h1>One More Byte</h1>

      </div>
   
   
      <div class="navbar">
        <p onClick={() => props.setter(1)}>Home</p>
        <p onClick={() => props.setter(2)}>Restaurants</p>
        <p onClick={() => props.setter(3)}>Volunteer</p>
        <p onClick={() => props.setter(4)}>Social</p>
        <p onClick={() => props.setter(5)}>Login</p>
      </div>


      <footer>
        <img src={tr} style={{width:"30px", height:"30px"}} />
        <p>One More Byte</p>
      </footer>
    </>
  )
}

export default Restaurants