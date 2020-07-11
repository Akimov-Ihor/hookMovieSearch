import React from 'react'
import './Header'
import { NavLink } from 'react-router-dom'

const Header = (props)=>{
    return (
        <header className="App-header">
            <NavLink to={'/'}>
            <h2>{props.text}</h2>
                </NavLink> 
        </header>
    )
}

export default Header