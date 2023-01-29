import React from 'react'
import tr from "./transparent copy.png"
import "./style.css"
const Volunteer = (props) => {
  return (
    <>

<script src="./script.js"></script>
<div className="header">
    <img src={tr}/>
    <h1>One More Byte</h1>

  </div>
    
      <div className="navbar">
        <p onClick={() => props.setter(1)}>Home</p>
        <p onClick={() => props.setter(2)}>Restaurants</p>
        <p onClick={() => props.setter(3)}>Volunteer</p>
        <p onClick={() => props.setter(4)}>Social</p>
        <p onClick={() => props.setter(5)}>Login</p>
      </div>
<h1>YOU WALKED </h1>

<div id="container"><span className="count">200</span>
</div>
<p>KM</p>
<h1>THATS LIKE 16.8L OF GAS</h1>




<h2>REWARDS</h2>
<div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ "--value": 65 }}></div>


      <div style={{clear:"both"}}>
        <br/>
        <a href="#" >Check Out Our Blog.</a>
    </div>
    <br />
 

    <p>How to earn points</p>
    <p>Help donate food +10</p>
    <p>Every kilometer walked +5 </p>
    <p>Every 100 points, recieve $5 voucher</p>
    <p>If you want volunteer hours contact us!</p>



    <footer>
        <img src={tr} style={{width:"30px", height:"30px"}} />
        <p>One More Byte</p>
      </footer>
    </>
  )
}

export default Volunteer