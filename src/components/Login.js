import React, { createContext, useContext, useState } from 'react'
import logo from "../images/signin-image.jpg"
import "../styles/Signup.css"
import { useHistory } from 'react-router-dom'
import { usercontext } from '../App'
import '../App.css'
const Login = () => {
    const {state , dispatch} = useContext(usercontext)
    const history = useHistory();
    const [password , setpassword]= useState();
    const [email ,setemail ] = useState();

    const helper = async (e)=>{
        e.preventDefault();
        const res = await fetch('https://api-08sb.onrender.com/signin', {
            method : "POST",
            mode: 'cors',
            credentials: 'include',
            
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,password
                })
                          
        });
        const data = res.json();
        if(res.status === 400 || !data){
            window.alert("invalid creditiional")
        }
        else{
            console.log(document.cookie);
            dispatch({type:"USER", payload:true})
            
            window.alert("login successfully");
            history.push('/');
        }
        
    }
  return (
    <>
      <div className="loginform">
    <form method="POST">
      <div className="loginformboxx">
        
          <h1 className='logintext'>Login</h1>
          <div className="emailbox">
            <input type="text" name="your_name" id="your_name" placeholder="Email" style={{fontFamily:"Outfit"}}
                                    value = {email} onChange={(e)=>{setemail(e.target.value)}}  />
            <label for="your_name">Email</label>
            <svg style={{height:"30px" , width:"30px" , color:"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="Email"><path fill="#ffffff" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z" class="color222222 svgShape"></path><path fill="#ffffff" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z" class="color222222 svgShape"></path><path fill="#ffffff" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z" class="color222222 svgShape"></path></svg>
          </div>
          <div className="passwordbox">
          <input type="password" name="your_pass" id="your_pass" placeholder="Password" style={{fontFamily:"Outfit"}}
                                    value = {password} onChange={(e)=>{setpassword(e.target.value) }} />
          <label for="your_pass" htmlFor="">Password</label>
          <svg style={{height:"30px" , width:"30px" , color:"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Password"><path d="M25 1L12.611 13.388A9 9 0 0 0 1 22a9 9 0 0 0 9 9 9 9 0 0 0 8.611-11.612L21 17v-2h2l8-8V1h-6zm4 5.171L22.172 13H19v3.171l-1.803 1.802-.848.848.348 1.147c.201.662.303 1.345.303 2.032 0 3.86-3.141 7-7 7s-7-3.14-7-7 3.141-7 7-7c.686 0 1.37.102 2.031.302l1.146.348.848-.848L25.828 3H29v3.171z" fill="#ffffff" class="color000000 svgShape"></path><circle cx="8" cy="24" r="2" fill="#ffffff" class="color000000 svgShape"></circle><path d="M20.646 10.647l6-6 .707.707-6 6z" fill="#ffffff" class="color000000 svgShape"></path></svg>
          </div>
          
          
          <button type="submit" name="signin" id="signin" class="form-submit" value="Log in" style={{fontFamily:"Outfit"}}
                                    onClick={helper}>Login</button>

          <p>Don't have an account? <a style={{fontWeight:"600" , color:'white',textDecoration:"none"}}href="/"> Register</a></p>
       
      </div>
      </form>
    </div>
    </>
  )
}

export default Login
