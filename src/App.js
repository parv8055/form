import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [sex, setSex] = useState('')
  const [dob, setDob] = useState('')
  const [show, setShow] = useState(false)

  useEffect(() => {

  })

  const OnSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='container'>
        <form className='form' >
          <label htmlFor="">Username</label>
          <input type="text" placeholder='Enter  username' value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="">Password</label>
          <input type="text" placeholder='Enter password' value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="">Confirm Password</label>
          <input type="text" placeholder='Enter confirm password' value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)} />
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter your name' value={name}
            onChange={(e) => setName(e.target.value)} />
          <label htmlFor="">Age</label>
          <input type="text" placeholder='Enter your age' value={age}
            onChange={(e) => setAge(e.target.value)} />
          <label htmlFor="">Sex</label>
          <select name="" id="" value={sex}
            onChange={(e) => setSex(e.target.value)}>
            <option value="">choose your sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label htmlFor="">Date of birth</label>
          <input type="date" placeholder='Enter your Date of birth' value={dob}
            onChange={(e) => setDob(e.target.value)} />
          <input type="submit" className='form__submit' onClick={(e) => {
            OnSubmit(e)
            setShow(true)
          }} />
        </form>
      </div>
      {show ? <div className='show'>
        <h2>Username : {username}</h2>
        <h2>Password : {password}</h2>
        <h2>Confirm Password : {confirmpassword}</h2>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
        <h2>Sex : {sex}</h2>
        <h2>Date of birth : {dob}</h2>
      </div> : ''}
    </>
  )
}

export default App