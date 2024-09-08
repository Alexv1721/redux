import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postuser } from './usersslice.js';
import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx';

const Add = () => {
    const [name, setName] = useState('');
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [web, setWeb] = useState('');
    const nav=useNavigate()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users.user);
    const status = useSelector((state) => state.users.status);

    const handleSubmit = () => {
        const newUser = {
            id: users.length + 1,
            name: name,
            username: uname,
            email: email,
            phone: phone,
            website: web
        }

        dispatch(postuser(newUser))
        nav('/Users')
    }


    return (
        <div className='add'>
<div><Header/></div>
            <div className='inputs'>
                <div>Name: <input type="text" onChange={(e) => setName(e.target.value)} /></div>
                <div>UserName: <input type="text" onChange={(e) => setUname(e.target.value)} /></div>
                <div>Email: <input type="email" onChange={(e) => setEmail(e.target.value)} /></div>
                <div>Phone: <input type="text" onChange={(e) => setPhone(e.target.value)} /></div>
                <div>WebSite: <input type="text" onChange={(e) => setWeb(e.target.value)} /></div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Add;
