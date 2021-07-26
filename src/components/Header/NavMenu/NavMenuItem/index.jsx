import React from 'react'
import style from './NavMenuItem.module.sass'
function NavMenuItem({itemName}) {
  return (
    <> 
    <li className={style.navMenuItem}><a href="" className={style.link}>{itemName}</a></li>
    </>
  )
}

export default NavMenuItem
