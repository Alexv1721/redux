import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchusers } from './usersslice';
import Header from './Header';

const Home = () => {
const nav=useNavigate()
  const users=useSelector((state)=>state.users.user)
  const status=useSelector((state)=>state.users.status)
  const err=useSelector((state)=>state.users.err)
const[ser,setser]=useState('')
const dis=useDispatch()
  useEffect(()=>{
if(status==='idle'){
dis(fetchusers())
}
  },[status,dis])
  console.log(users)
function handleview(id){
nav(`/user/${id}`)
}

function handlesearch(val){
  setser(val.target.value)
}
  return (
    <div>
      <Header/>
      <center><input className='searchbar' onChange={(e)=>handlesearch(e)} placeholder='Search by Name..' type="text" name="" id="" /></center>
      <div className='allusers'>
      
      {status=='fail'&&<div>{err}</div>}
      {status=='Loading'&&<div>Loading..</div>}
      {/*  */}
      {
        ser?<div style={{color:'wheat'}}>
{
  users.map((user)=>{

    if(user.name.includes(ser)){
      return(<div style={{color:'wheat'}}>{user.name} <span><button onClick={()=>handleview(user.id)}>View</button></span> </div>)
    }

  })
}
        </div>:<div>{
        
        users.map((user)=>
        <div style={{color:'wheat'}}>{user.name} <span><button onClick={()=>handleview(user.id)}>View</button></span> </div>
        )
      }</div>
      }
    </div>
    </div>
    
  )
}

export default Home
