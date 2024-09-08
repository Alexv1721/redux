import React from 'react'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const nav=useNavigate()
  return (
    <div>
         <div className='nav'>
        <nav onClick={()=>nav('/')}>Home</nav>
        <nav onClick={()=>nav('/Add')}>Add</nav>
        <nav onClick={()=>nav('/users')}>Users</nav>
      </div>
    </div>
  )
}

export default Header
