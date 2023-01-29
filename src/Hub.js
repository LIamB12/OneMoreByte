import React from 'react'
import "./style.css"
import sdg2 from "./sdg2.png"
import tr from "./transparent copy.png"
import sdg3 from "./sdg3.png"
import sdg13 from "./sdg13.png"


const Hub = (props) => {
  return (
    <>
    <div className="header">
      <img src={tr}/>
        <h1>One More Byte</h1>
        
      </div>
    
      <div className="navbar">
        <p onClick={() => props.setter(1)}>Home</p>
        <p onClick={() => props.setter(2)}>Restaurants</p>
        <p onClick={() => props.setter(3)}>Volunteer</p>
        <p onClick={() => props.setter(4)}>Social</p>
        <p onClick={() => props.signOut()}>Sign Out</p>
      </div>
      <br/>
      <div className="grid">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={sdg2}  style={{width: "300px", height:"300px"}} />
            </div>
            <div className="flip-card-back">
            
              <p>"End hunger, achieve food security and improved nutrition and promote sustainable agriculture"</p>
            </div>
          </div>
        </div>  
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={sdg3}  alt="Avatar" style={{width:"300px", height:"300px"}}/>
            </div>
            <div className="flip-card-back">
             
              <p>"Ensure healthy lives and promote well-being for all at all ages"</p>
            </div>
          </div>
        </div>  
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={sdg13} alt="Avatar" style={{width:"300px", height:"300px"}}/>
            </div>
            <div className="flip-card-back">
        
              <p>"Take urgent action to combat climate change and its impacts"</p>
            </div>
          </div>
        </div>  
      </div>
      <br/>
      <hr/>
        <br/>
        <p>Why is Food Waste a Problem?</p>
        <p>According to the National Zero Waste Council's research, an excess of $21 billion and almost 2.3 million tonnes of edible food is wasted each year in Canada. In addition to the economic costs, food waste has substantial environmental impacts.</p>

        <br/>
      <hr/>
      <p>Let's Make Change! Join the Movement!</p>
      <p>community, volunteer, let's spread the word!</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d178787.81912808729!2d-73.7118733!3d45.5591827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd473c89db97e7d54!2sRadish!5e0!3m2!1sen!2sca!4v1674969610885!5m2!1sen!2sca" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <footer>
        <img src={tr} style={{width:"30px", height:"30px"}} />
        <p>One More Byte</p>
      </footer>
      </>

  )
}

export default Hub