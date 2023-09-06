import React, {useState} from 'react';

import './Signup.css';


import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Signup = () => {

  const [action, setAction] = useState("Login");

  return (
    <div className='container'>
    <div className="header">
      <div className="text">{action}</div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name'/>
        </div>}
       
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='E-mail'/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      <div className="sumbit-container">
        <div className={action==="Login"?"sumbit gray":"sumbit"} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>    
        <div className={action==="Sign Up"?"sumbit gray":"sumbit"} onClick={() => {setAction("Login")}}>Login</div>   
      </div>
      <div className="login-container">Forget Password? <span>Click Here!</span></div> 

      
  </div>
  );
};

export default Signup

//{action==="Sign Up"?"sumbit gray":"sumbit"}