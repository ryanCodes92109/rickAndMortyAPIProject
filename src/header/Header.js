import React from 'react'
import './Header.css'
import { TextField } from '@mui/material'

const Header = () => {
  return (
    <div className ='headerContainer'>
      <TextField label='Search Characters' className='searchBar'/>
    </div>
  )
}

export default Header