/* The purpose of the Header component is to render a menu icon, the app title, and a search icon */

import React from 'react'
import FlexBetween from '../flexBetween/flexBetween'
import { Menu, Search } from '@mui/icons-material'
import logo from '../../assets/celero_commerce_logo_white.png'


export const Header = ()=> {
    const handleMenuClick = () => {
        console.log("Menu icon has been clicked.")
    }
    
    const handleSearchClick = () => {
        console.log("Search icon has been clicked.")
    }
  
    return (
    <div className='header'>
        <FlexBetween>
            <Menu className='header-icon' aria-label='menu' onClick={handleMenuClick}></Menu>
            <h1>Celero</h1>
            <Search className='header-icon' aria-label='search' onClick={handleSearchClick}></Search>
        </FlexBetween>
        <h1 className='header-title'>Cool New Celero Mobile App</h1>
        <p>(For Interview Demo Purposes Only)</p>
    </div>
  )
}