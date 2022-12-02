import React from 'react'

// redux
import { useSelector } from 'react-redux';

const HomePage = () => {
  const users = useSelector(state => state.usersData);


  return (
    <>
      
    </>
  )
}

export default HomePage