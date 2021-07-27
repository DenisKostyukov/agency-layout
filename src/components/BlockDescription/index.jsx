import React from 'react'
import style from './BlockDescription.module.sass'
function BlockDescription({description}) {
  return (
    <> 
      <p className={style.description}>{description}</p>
    </>
  )
}

export default BlockDescription
