import React from 'react'
import './common/style/reset.css'
import About from './components/About'
import Header from './components/Header'
import MainPage from './components/MainPage'
import Partners from './components/Partners'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Team from './components/Team'
function App () {
  return <> 
  <Header />
  <MainPage />
  <Services />
  <Portfolio />
  <About />
  <Team />
  <Partners />
  </>
}

export default App
