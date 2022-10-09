import React from 'react'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import Logo from '../YouTube-logo.png'

const Navbar = () => 
  (
    <Stack direction='row' alignItems='center' p={2} pl={3} sx={{position:'sticky', background:'#212121', top:0, justifyContent: 'space-between'}}>
        <Link to='/' style={{display:'flex', alignItems: 'center'}}>
            <img src={Logo} alt="logo" height={45} />
        </Link>
        <SearchBar/> 
    </Stack>
  )

export default Navbar