import React, { createContext, useContext, useState } from 'react'
import logo from "../images/signin-image.jpg"
import "../styles/Signup.css"
import { useHistory } from 'react-router-dom'
import { usercontext } from '../App'
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
      <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={logo} alt="sing up image"/></figure>
                        <a href="#" class="signup-image-link">Create an account</a>
                    </div>

                    <div class="signin-form">
                       <div className="signuptext" style={{
  width: 'fit-content',
  background: 'skyblue',
  padding: '3px',
  marginBottom: '30px',
  marginLeft: 'auto',
  marginRight: 'auto',
}}>
  <h2 className="form-title" style={{
    padding: '3px',
    margin: '0',
    color: '#fff',
    fontWeight: '600',
  }}>Let's Roll</h2>
</div>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Email" style={{fontFamily:"Outfit"}}
                                    value = {email} onChange={(e)=>{setemail(e.target.value)}}
                                />
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password" style={{fontFamily:"Outfit"}}
                                    value = {password} onChange={(e)=>{setpassword(e.target.value) }}
                                />
                            </div>
                            
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" style={{fontFamily:"Outfit"}}
                                    onClick={helper}
                                />
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login
