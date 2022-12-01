import React from 'react'

// redux
import { useSelector } from 'react-redux';

const HomePage = () => {
  const users = useSelector(state => state.userSlice);


  return (
    <>
      <div className='m-2 p-2'>
        <h4>Users in DataBase</h4>
        <ol>
          {
            (users.list).map((user, index) => (
              <li key={index}>{user.username}</li>
            ))
          }
        </ol>
      </div>
    </>
  )
}

export default HomePage