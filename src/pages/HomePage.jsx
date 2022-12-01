import React, { useContext, useEffect } from 'react'

import { fetchUser } from '../redux/features/userData/userSlice'
import {useDispatch} from 'react-redux'

const HomePage = () => {

const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchUser);
}, []);



  return (
    <div>HomePage</div>
  )
}

export default HomePage