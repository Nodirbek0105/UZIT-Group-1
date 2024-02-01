import React from 'react' 
import style from './Button.module.scss'

export default function Button({children}) {
  return (
    <div className={style.button}>{children}</div>
  )
}
