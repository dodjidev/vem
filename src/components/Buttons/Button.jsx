import React from 'react'
import { SettingsOutline } from 'react-ionicons'

const Button = (props) => {
  let n_class= "bg-"+props.color+"-"+500
  let icon_class= "text-"+props.color+"-"+700
  const { clName } = props.className || ''
  return (
     <button {...props} className={"text-center  items-center  "+props.className} >
         {props.children}
     </button>
  )
}

export default Button
