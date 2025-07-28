import React from 'react'
import { useState, useEffect } from 'react';
import "./Form.css";

const Form = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorUserName, setErrorUserName] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroPassword, setErroPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const [userColor, setUserColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

    const validate = (e) => {
      e.preventDefault()
      if(username.length > 8){
        setErrorUserName('');
        setUserColor('green');
      } else {
        setErrorUserName('Username must be 8 letters long.');
        setUserColor('red');
      }
      if(email.includes('@gmail')){
        setErroEmail('');
        setEmailColor('green')
      } else{
        setErroEmail("Email must include '@gmail' ");
        setEmailColor("red");
      }
      if(password.length > 8) {
        setErroPassword("")
        setPasswordColor("green")
      } else {
        setErroPassword(" Password length should be 8 letters long")
        setPasswordColor("red")
      }
      if( password !== "" && password == confirmPassword) {
        setErrorConfirmPassword("")
        setConfirmPasswordColor("green")
      } else{
        setErrorConfirmPassword("Password Does not match")
        setConfirmPasswordColor("red")
      }
    
    };
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
            <form>
                <input type="text" placeholder='Name' style={{ borderColor: userColor}} value={username} onChange={ (e) => setUsername(e.target.value)} />
                <p className="error">{errorUserName}</p>
                <input type="text" placeholder='Email' style={{borderColor: emailColor}} value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="error">{erroEmail}</p>
                <input type="password" placeholder='Password' style={{borderColor: passwordColor}} value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="error">{erroPassword}</p>
                <input type="password" placeholder='Confirm Password' style={{borderColor: confirmPasswordColor}} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <p className="error">{errorConfirmPassword}</p>
    <button className='submit-btn' onClick={validate}>Submit</button>
            </form>
        
      </div>
    </>
  )
}

export default Form
