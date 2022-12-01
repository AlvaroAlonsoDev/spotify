import React, { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getDataUser } from '../api/Api';

const HomePage = () => {
  const { userSlice: data } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataUser());
  }, [])
  useEffect(() => {
    console.log(data.list);
  })


  return (
    <>
    {
      (data.list).map((user,index) => (
        <div key={index}>{user.username}</div>
      ))
    }
    </>
  )
}

export default HomePage