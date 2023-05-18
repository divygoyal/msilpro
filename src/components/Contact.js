import React, { useEffect, useState } from 'react'
import "../styles/Contact.css"
import 'bootstrap/dist/css/bootstrap.css'
import green from './img.jpg'
const Contact = () => {
    
    const [persondata , setpersondata] = useState({name:"" , email:"", phone:"" , message:""});
    const helper = async()=> {
        try {
            const res = await fetch('https://api-08sb.onrender.com/getdata', {
                method: "GET",
                credentials: "include",
                headers: {
                   
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
      
            setpersondata({...persondata , name:data.name , email:data.email  , phone:data.phone});
            console.log(data);
            if(!res.status===200  ){
                console.log('bc');
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
        console.log(err);
        console.log("mc");
        
    }
    }

    useEffect(()=>{
        helper();
    },[])
    
    const dp= (e)=>{
        const name =e.target.name ;
        const value = e.target.value ;
        console.log(name , value);
        setpersondata({...persondata , [name]:value});
    }

    const pd = async (e)=> {
        e.preventDefault();
        const { name, email, phone, message } = persondata;
        const res = await fetch('https://api-08sb.onrender.com/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });
        const data = await res.json();
        if(!data){
            console.log("connection not established");
        }else{
            alert("message sent");
            setpersondata({...persondata , message:""})
        }
       
    }
    

    return (
    <>
    <div className="contact_info pt-5 " >
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-betweeen"   style={{ justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
             
                <div className="contact_info_item d-flex justify-content-start align-items-center" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #eee', padding: '20px' ,width :"310px",margin:'10px',borderRadius:'20px'}} >
                    <img width="24" height="24" src="https://img.icons8.com/color/24/000000/phone.png" alt="phone"/>
                    <div className="contact_info_content" style={{ padding: '10px' }}>
                        <div className="contact_info_title">
                            Phone
                        </div>
                        <div className="contact_info_text">
                            +91 1111 543 2198
                        </div>
                    </div>
                </div>
                <div className="contact_info_item d-flex justify-content-start align-items-center" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #eee', padding: '20px' ,width :"310px",margin:'10px',borderRadius:'20px'}} >
                    <img width="24" height="24" src="https://img.icons8.com/fluency/24/gmail-new.png" alt="gmail-new"/>
                    <div className="contact_info_content" style={{ padding: '10px' }}>
                        <div className="contact_info_title">
                            Gmail
                        </div>
                        <div className="contact_info_text">
                            goyaldivy1010@gmail.com
                        </div>
                    </div>
                </div>
                <div className="contact_info_item d-flex justify-content-start align-items-center" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #eee', padding: '20px' ,width :"310px",margin:'10px',borderRadius:'20px'}} >
                   <img width="24" height="24" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
                    <div className="contact_info_content" style={{ padding: '10px' }}>
                        <div className="contact_info_title">
                            Linkedin
                        </div>
                        <div className="contact_info_text">
                        https://www.linkedin.com/divygoyal
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>  


<section className="ftco-section" style={{margin:"60px"}} >
      <div className="container" style={{width: '100%', paddingRight: '15px', paddingLeft: '15px', marginRight: 'auto', marginLeft: 'auto'}}>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="wrapper img" style={{height:'700px',backgroundSize: 'contain',backgroundImage:`url(${green})` ,width: '100%', overflow: 'hidden', borderRadius: '5px'}}>
              <div className="row">
                <div className="col-md-9 col-lg-7">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h2 className="mb-5" style={{marginBottom:"20px"}}>Get in touch with us</h2>
                    <div id="form-message-warning" className="mb-4" style={{display: 'none', color: 'red'}}></div>
                    <div id="form-message-success" className="mb-4" style={{display: 'none', color: '#28a745', fontSize: '18px', fontWeight: '500'}}>Your message was sent, thank you!</div>
                    <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" for="name" style={{ textTransform:"uppercase",marginBottom: '0.5rem',position:"relative",fontWeight:"bold" , fontSize:'12px',color:'black'}}>Full Name</label>
                            <input  style ={{fontFamily:"Outfit",margin:"10px",overflow: 'visible',fontSize:"16px",border:"none",height:"50px",borderRadius:"7px",boxShadow:"0px 8px 19px -13px rgba(0, 0, 0, 0.09)"}} type="text"  id="name"  value = {persondata.name} onChange={dp}className="form-control" name="name" placeholder="Name"  />
                          </div>
                        </div>
                        <div className="col-md-6"> 
                          <div className="form-group">
                            <label className="label" style={{ textTransform:"uppercase",marginBottom: '0.5rem',position:"relative",fontWeight:"bold" , fontSize:'12px',color:'black'}} for="email">Email Address</label>
                            <input type="email" name="email" id="email"  value = {persondata.email} onChange={dp}  className="form-control"  placeholder="Email" style ={{fontFamily:"Outfit",borderRadius:"7px",margin:"10px",overflow: 'visible',fontSize:"16px",border:"none",height:"50px",boxShadow:"0px 8px 19px -13px rgba(0, 0, 0, 0.09)"}} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" style={{textTransform:"uppercase", marginBottom: '0.5rem',position:"relative",fontWeight:"bold" , fontSize:'12px',color:'black'}} for="Phone">Phone Number</label>
                            <input  className="form-control"  type="number" name="phone" id="phone" placeholder="Phone" value = {persondata.phone} onChange={dp}  style ={{fontFamily:"Outfit",borderRadius:"7px",margin:"10px",overflow: 'visible',fontSize:"16px",border:"none",height:"50px",boxShadow:"0px 8px 19px -13px rgba(0, 0, 0, 0.09)"}} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" style={{ textTransform:"uppercase",marginBottom: '0.5rem',position:"relative",fontWeight:"bold" , fontSize:'12px',color:'black'}} htmlFor="#">Message</label>
                            <textarea name="message" onChange={dp} className="form-control" id="message" cols="30" rows="4" placeholder="Message" style={{margin:"10px" ,marginBottom:"20px", border:"none",resize: 'vertical', fontSize: '16px'}}></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                          <button class="btn btn-success " style={{marginLeft:"10px" , height:"40px" , width:"120px",fontSize:"15px"}} type="submit" onClick={pd} >Send Message</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* /////////////////////// */}
    </>
  )
}

export default Contact
