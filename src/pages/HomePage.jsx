import React, { useEffect } from 'react'

// redux
import { useSelector } from 'react-redux';

const HomePage = () => {
  const users = useSelector(state => state.userSlice);

  const prueba = (e) => {
    e.preventDefault()

    //get info from form
    const new_user = {
      username: e.target.username.value,
      password: e.target.password.value
    }

    console.log(new_user);
  }
  return (
    <><div className='m-2 p-2'>
      <ol>
        {
          (users.list).map((user, index) => (
            <li key={index}>{user.username}</li>
          ))
        }
      </ol>
    </div>

      <form onSubmit={e => prueba(e)} className="needs-validation mt-3">
        <div className="row g-3">

          <div className="form-floating mb-3">
            <input type="text" name="username" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check m-2 mb-3">
            <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
            <label className="form-check-label" htmlFor="rememberPasswordCheck">
              Remember password
            </label>
          </div>
        </div>


        <button className="mt-2 w-100 btn btn-primary btn-lg" type="submit">Log in</button>

        <hr className="my-4" />

        <button type="submit" className="btn btn-primary">Submit</button>


      </form>
    </>
  )
}

export default HomePage