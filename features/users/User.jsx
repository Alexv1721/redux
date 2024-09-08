import React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from './Header'

const User = () => {
const sel=useSelector((state)=>state.users.user)
    const {id}=useParams()
  return (
    <div style={{color:'wheat'}}>
    {
        sel.map((item)=>{
if(item.id==id){
   return(

    <div>
        <Header/>
         <div className='u' style={{color:'blue'}}>
    <p><span style={{color:'red'}}>Name:</span> {item.name}</p>
    <p><span style={{color:'red'}}>UserName:</span>{item.username}</p>
    <p><span style={{color:'red'}}>Emailid:</span> {item.email}</p>
    <p><span style={{color:'red'}}>Phone Number:</span> {item.phone}</p>
    <p><span style={{color:'red'}}>Website:</span> {item.website}</p>
    </div>
        </div>
   
   )
}
        })
    }
    </div>
  )
}

export default User
