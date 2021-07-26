import React from 'react'
import style from './BlockDescription.module.sass'
function BlockDescription({descrition}) {
  return (
    <> 
      <p className={style.description}>{descrition}</p>
    </>
  )
}

export default BlockDescription
