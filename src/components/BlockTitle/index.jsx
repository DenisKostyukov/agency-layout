import React from 'react'
import ServiceItem from '../Services/ServiceItem'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import style from './BlockTitle.module.sass'
function BlockTitle({title}) {
  return (
    <>
      <h1 className={style.title}>{title}</h1>
      <ServiceItem icon={<ShoppingCartIcon />} /> 
    </>
  )
}

export default BlockTitle
