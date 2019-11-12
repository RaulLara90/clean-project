import React from 'react'

export const Button = (props) => {
  console.log(props)
  const customStyles = {
    backgroundColor: props.color || ''
  }
  return (
    <button style={customStyles}>{props.children}</button>
  )
}
// export default Button
