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
      <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"  
                                    value = {user.name} onChange={helper}  style={{fontFamily:"Outfit"}}
                                />
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"  
                                    value = {user.email} onChange={helper}  style={{fontFamily:"Outfit"}}
                                />
                            </div>
                            <div class="form-group">
                                <label for="phone"><i class="zmdi zmdi-email"></i></label>
                                <input type="number" name="phone" id="email" placeholder="Your Phone"  
                                    value = {user.phone} onChange={helper}  style={{fontFamily:"Outfit"}}
                                />
                            </div>
                            <div class="form-group">
                                <label for="Work"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="work" id="email" placeholder="Your Proffesion"  
                                    value = {user.work} onChange={helper}  style={{fontFamily:"Outfit"}}
                                />
                            </div>
                            <div class="form-group" style={{marginBottom:'20px' , }}>
                                <label for="location"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="location" id="name" placeholder="Your location"  
                                    value = {user.location} onChange={helper}  style={{fontFamily:"Outfit"}}
                                />
                            </div>
                            <div class="form-group" style={{marginBottom:'10px' ,fontSize:'8px' }}>
                                <label for="car"><i class="zmdi zmdi-email"></i></label>
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
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-email"></i></label>
                                <input type="password" name="password" id="email" placeholder="Password"  
                                    value = {user.password} onChange={helper}   style={{fontFamily:"Outfit"}}
                                />
                            </div>
                            <div class="form-group">
                                <label for="cpass"><i class="zmdi zmdi-email"></i></label>
                                <input type="password" name="cpassword" id="email" placeholder="confirm your password" 
                                    value = {user.cpassword} onChange={helper}    style={{fontFamily:"Outfit"}}
                                />
                            </div>
                            
                            
                            
                            
                            <div class="form-group form-button">
                                <input    style={{fontFamily:"Outfit"}} type="submit" name="signup" id="signup" class="form-submit" value="Register" onClick={postdata}/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src={logo} alt="sing up image"/></figure>
                        <a href="#" class="signup-image-link" onClick={()=>{
                            history.push("/Login");
                        }}>I am already member</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Signup
