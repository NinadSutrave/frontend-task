import React from 'react'
import './smallbutton.css'

const SmallButton = ({style, text}) => {
  return (
    <div className = "button button-small" style = {style} >
        <img alt="" src={require("../../assets/icons/mail.png")} />
        {text}
    </div>
  )
}

export default SmallButton