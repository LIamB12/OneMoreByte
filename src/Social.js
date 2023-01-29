import React from 'react'
import tr from "./transparent copy.png"
import r1 from "./radish1.png"
import r2 from "./radish2.jpeg"
import r3 from "./radish3.png"
import fw from "./food_waste.jpeg"

const Social = (props) => {
  return (
    <>
      <div className="header">
      <img src={tr} />
        <h1>Header</h1>

      </div>
    
      <div className="navbar">
        <p onClick={() => props.setter(1)}>Home</p>
        <p onClick={() => props.setter(2)}>Restaurants</p>
        <p onClick={() => props.setter(3)}>Volunteer</p>
        <p onClick={() => props.setter(4)}>Social</p>
        <p onClick={() => props.setter(5)}>Login</p>
      </div>

      <br />

      <div className="grid">
        <img id="myImg" src={r1} alt="Snow" />

        
        <img src={r2} />
        <img src={r3} />
        <img src={fw} />
        <img src="/pix/samples/25m.jpg" alt="Sample photo" />
        <img src="/pix/samples/16l.jpg" alt="Sample photo" />
      </div>
    </>
  )
}

export default Social