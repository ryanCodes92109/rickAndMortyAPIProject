import React from 'react'
import './Header.css'
import { TextField } from '@mui/material'

const Header = ({setSearch}) => {

  const handleChange = e => setSearch(e.target.value);

  return (
    <div className ='headerContainer' 
    >
      <TextField 
        onChange={handleChange}
        label='Search Characters' 
        className='searchBar' 
      />
    </div>
  )
}

export default Header