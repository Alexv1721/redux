import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './features/users/Home'
import Add from './features/users/Add'
import UserDisplay from './features/users/UserDisplay'
import User from './features/users/User'

const App = () => {
  return (
    <div>
   
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='Add' element={<Add/>}/>
  <Route path='Users' element={<UserDisplay/>}/>
<Route path='user/:id' element={<User/>}/>
 



</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
