import React, {useState} from 'react'
import './App.css'
import Header from './header/Header'
import Characters from './characters/Character'


const App = () => {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
 
  return (
    <>
    <Header 
      search={search}
      setSearch={setSearch}
    />
      <div className='appContainer'>
        
        <Characters 
          characters={characters}
          setCharacters={setCharacters}  
          search={search}
          setSearch={setSearch}
        />
      </div>
    </>
  )
}

export default App