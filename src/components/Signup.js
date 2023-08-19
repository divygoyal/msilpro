import React, { useState } from 'react'

import "../styles/Signup.css"
import logo from "../images/signup-image.jpg"

import { useHistory } from 'react-router-dom'
const Signup = () => {
    const history = useHistory();
   const  [user , setuser] = useState({
    name :  "", email : "",phone : "" ,work:"", password: "" ,cpassword: "",location:"",car:""
   });
    let name , value;
   const helper = (e)=>{
    
        name  =  e.target.name;
        value = e.target.value;
        // console.log(value);
        setuser({...user , [name]:value});
        console.log(user.name,user.phone);
   }

   const postdata=async(e)=>{
        e.preventDefault();
        const {name , email , phone , work , password,cpassword,location,car } = user;

        const res = await fetch("https://api-08sb.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            name, email, phone, work,location,car, password, cpassword
            })
        });
        
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("INvalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert(" Registration Successfull");
            console.log("Successfull Registration");
            history.push("/Login");
        }

    }


  return (
    <>
      <div className="loginform">
    <form method="POST">
      <div className="loginformboxx">
        
          <h1 className='logintext'>Register</h1>
          <div className="emailbox">
            <input type="text" name="name" id="name" placeholder="Your Name"  
                                    value = {user.name} onChange={helper}  style={{fontFamily:"Outfit"}}  />
            <label  for="name" >Email</label>
            {/* <svg style={{height:"30px" , width:"30px" , color:"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="Email"><path fill="#ffffff" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z" class="color222222 svgShape"></path><path fill="#ffffff" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z" class="color222222 svgShape"></path><path fill="#ffffff" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z" class="color222222 svgShape"></path></svg> */}
          </div>
          <div className="passwordbox">
          <label for="email"></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"  
                                    value = {user.email} onChange={helper}  style={{fontFamily:"Outfit"}}
                                />
          {/* <svg style={{height:"30px" , width:"30px" , color:"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Password"><path d="M25 1L12.611 13.388A9 9 0 0 0 1 22a9 9 0 0 0 9 9 9 9 0 0 0 8.611-11.612L21 17v-2h2l8-8V1h-6zm4 5.171L22.172 13H19v3.171l-1.803 1.802-.848.848.348 1.147c.201.662.303 1.345.303 2.032 0 3.86-3.141 7-7 7s-7-3.14-7-7 3.141-7 7-7c.686 0 1.37.102 2.031.302l1.146.348.848-.848L25.828 3H29v3.171z" fill="#ffffff" class="color000000 svgShape"></path><circle cx="8" cy="24" r="2" fill="#ffffff" class="color000000 svgShape"></circle><path d="M20.646 10.647l6-6 .707.707-6 6z" fill="#ffffff" class="color000000 svgShape"></path></svg> */}
          </div>
          <div className="emailbox">
          <label for="phone"></label>
                                <input type="number" name="phone" id="email" placeholder="Your Phone"  
                                    value = {user.phone} onChange={helper}  style={{fontFamily:"Outfit"}}
                                />
          </div>
          <div className="emailbox">
          <label for="Work"></label>
                                <input type="text" name="work" id="email" placeholder="Your Proffesion"  
                                    value = {user.work} onChange={helper}  style={{fontFamily:"Outfit"}}
                                />
          </div>
          <div className="emailbox">
          <label for="location"></label>
                                <input type="text" name="location" id="name" placeholder="Your location"  
                                    value = {user.location} onChange={helper}  style={{fontFamily:"Outfit"}}
                                />
          </div>
          <div className="emailbox">
          <label for="car"></label>
                                <select name="car" id="car" value={user.car} onChange={helper}   style={{fontFamily:"Outfit"}}>
                                  <option value="" >Select a car model</option>
                                  <option value="Brezza">Brezza</option>
                                  <option value="Swift">Swift</option>
                                  <option value="Ertiga">Ertiga</option>
                                  <option value="Baleno">Baleno</option>
                                  <option value="Dzire">Dzire</option>
                                  <option value="Wagonr">Wagonr</option>
                                  <option value="Alto">Alto</option>
                                  <option value="Eeco">Eeco</option>
                                  <option value="S-Presso">S-Presso</option>
                                  <option value="XL6">XL6</option>
                                  <option value="Ignis">Ignis</option>
                                  <option value="Ciaz">Ciaz</option>
                                  <option value="Grand Vitara">Grand Vitara</option>
                                  <option value="Jimny">Jimny</option>
                                  <option value="Fronx">Fronx</option>

                                  

                                </select>
          </div>
          <div className="emailbox">
          <label for="pass"></label>
                                <input type="password" name="password" id="email" placeholder="Password"  
                                    value = {user.password} onChange={helper}   style={{fontFamily:"Outfit"}}
                                />
          </div>
          <div className="emailbox">
          <label for="cpass"></label>
                                <input type="password" name="cpassword" id="email" placeholder="confirm your password" 
                                    value = {user.cpassword} onChange={helper}    style={{fontFamily:"Outfit"}}
                                />
          </div>
          
          
          
          <button style={{fontFamily:"Outfit"}} type="submit" name="signup" id="signup" class="form-submit" value="Register" onClick={postdata}>Login</button>

          <p>Have an account? onClick={()=>{
                            history.push("/Login");
                        }} <a style={{fontWeight:"600" , color:'white',textDecoration:"none"}}> Login</a></p>
       
      </div>
      </form>
    </div>
    </>
  )
}

export default Signup
