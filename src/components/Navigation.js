import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
       <nav>
        <ul>
            <li>
                <NavLink to='/about'>
                    About Me
                </NavLink>
            </li>
            <li>
                <NavLink to='/portfolio'>
                    Portfolio
                </NavLink>
            </li>
            <li>
                <NavLink to='/resume'>
                    Resume
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
            </li>
            
        </ul>
     </nav> 
    </div>
    
  )
}

export default Navigation