import React , { useState } from 'react'
import './LoginSignup.css'



import user_icon from '../Assets/user.png'
import email_icon from '../Assets/mail.png'
import password_icon from '../Assets/padlock.png'
import HomePage from '../HomePage/HomePage'


const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");
    const [email , setEmail] = useState('');
    const [signedInEmail, setSignedInEmail] = useState('');

    const handleSignIn = (e) => {
        if (e && e.preventDefault){
        e.preventDefault();
    }
        setSignedInEmail(email);

    }



  return (
    <div className='container'>
        {signedInEmail ? ( <HomePage email={signedInEmail}/>
        ) : (
        <div>
         <div className="header">
            <div className="text"> {action} </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div> : <div className="input">
                <img src={user_icon} alt="" className='img-size'/>
                <input type="text" placeholder='Name' />
            </div> }
            <div className="input">
                <img src={email_icon} alt="" className='img-size' />
                <input type="email" placeholder='Email Id' className='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

            </div>
           
            <div className="input">
                <img src={password_icon} alt="" className='img-size'/>
                <input type="password" placeholder='Password' />
            </div>
        </div>
    
        {action==="Sign Up"? <div></div>:<div className="forgot-password">Lost password? <span>Click Here</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray": "submit"}onClick={()=>{
                setAction("Sign Up")
                handleSignIn(email);
                }}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{
                setAction("Login");
                handleSignIn(email);
            }}>Login</div>
            
        </div>
    </div>
  )}
  </div>
);
}
export default LoginSignup
