import React from 'react' 
import style from './Header.module.scss'
import HeaderRightSide from './HeaderRightSide'
import HeaderLeftSide from './HeaderLeftSide'
import HeaderCenter from './HeaderCenter'
import ToggleTheme from './ToggleTheme'

export default function Header() {
  




  return (
    <div className={style.header}>
      {/* Header left side */}
    <HeaderLeftSide/>
          {/* Header center */}
    <HeaderCenter/>
            {/* Header right side */} 
   <HeaderRightSide />

   
        
    
    </div>
  )
}
