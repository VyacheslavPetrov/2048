import React, {useRef} from "react"
import Mousetrap  from 'mousetrap';

const Button = props => {
  const {children, hotKey, onClick, ...rest} = props
  const inputEl = useRef(null)

  if(onClick){
    Mousetrap.bind(hotKey, () => {onClick()})
  } else {
    Mousetrap.bind(hotKey, () => {inputEl.click()})
  }

  return <button
    onClick={onClick}
    ref={inputEl}
    {...rest}
  >
    {children}
  </button>
}

export default Button