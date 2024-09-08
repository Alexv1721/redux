import React from 'react'
import '../users/styles/all.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
const Home = () => {

    const nav=useNavigate()
  return (
    <div>
   <Header/>

      <div className='wel'>Hello,World!</div>
    </div>
  )
}

export default Home
