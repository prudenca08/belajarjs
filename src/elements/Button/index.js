import React from 'react'
import  {Link } from 'react-router-dom'
import propTypes from 'prop-types'


export default function Button(props) {
  const className = [props.className]
  if(props.isPrimary) className.push("btn-primary")
  if(props.isLarge) className.push("btn-lg")
  if(props.isSmall) className.push("btn-sm")
  if(props.isBlock) className.push("btn-block")
  if(props.isShadow) className.push("btn-shadow")

  const onclick = () => {
    if(props.onclick) props.onclick()
  }

  if(props.type === "Link"){
    <a href={props.href} className={className.join(" ")} style={props.style} target={props.target === "_blank" ?"_blank":undefined} rel={props.target === "_blank" ?"noopener noreferrer":undefined}>{props.children}</a>
  } else {
    return{
      Link
    }
  }
  return (
    <div>
    </div>
  )
}

Button.propTypes = {
  type: propTypes.oneOf(["Button","Link"]),
  onclick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool
};