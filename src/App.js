import React from 'react'
import './App.css'
import Header from './header/Header'
import Characters from './characters/Character'


const App = () => {

 


  return (
    <>
    <Header />
      <div className='appContainer'>
        
        <Characters />
      </div>
    </>
  )
}

export default App