import React, {useState, useEffect} from 'react';
import style from './Header.module.sass';
import Logo from './Logo';
import NavMenu from './NavMenu';
function Header () {
  const [header, setHeader] = useState("header")
  const scrollEvent = e =>{
    if(window.scrollY){
      return setHeader("scrolledHeader")
    }else{
      return setHeader("header")
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",scrollEvent)
    return ()=> window.removeEventListener("scroll", scrollEvent)
  },[])
  return (
    <>
      <header className={style[header]}>
        <div className={style.container}>
          <div className={style.headerInner}>
            <Logo />
            <NavMenu />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
