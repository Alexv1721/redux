import {configureStore} from '@reduxjs/toolkit'
import UserResucer from '../features/users/usersslice'
export const store=configureStore(
    {
        reducer:{
            users:UserResucer
        }
    }
)