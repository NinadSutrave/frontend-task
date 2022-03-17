import React from 'react'
import './sectionnine.css'
import ListItem from '../elements/ListItem'
import Divider from '../elements/Divider'
import Form from '../elements/Form'

const SectionNine = () => {
  return (
    <>
    <div className="section-nine">

      <div className="social-media-icons">     
      <img className="facebook-icon" alt="" src={require("../../assets/icons/facebook.png")} />
      <img alt="twitter-icon" src={require("../../assets/icons/twitter.png")} />
      </div> 

      <div className="list">
      <ListItem item="Products" />
      <ListItem item="Our Science" />
      <ListItem item="Vision & Mission" />
      <ListItem item="About Us" />
      </div>

      <Divider 
        style = {{
          width: '306px',
          border: '0.5px solid #E3F4FF'
        }}
      />
      
      <h6>Subscribe to our newsletter</h6>
      <Form placeholder="Enter your email..." />
        
    </div>
    </>
  )
}

export default SectionNine