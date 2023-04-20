import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { usercontext } from '../App'
import { NavLink } from 'react-router-dom'
import imgo from "./msilfinallogo.png";


const Navbar = () => {
  const {state , dispatch} = useContext(usercontext);
  const Rendermenu=()=>{
    if(state){
      return (
      <>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" style={{textDecoration:'none' , borderBottom:'0px',fontFamily: 'Outfit',
    fontWeight: 'bold',
    fontSize: '15px'}} to="/">Home </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" style={{textDecoration:'none' , borderBottom:'0px' ,fontFamily: 'Outfit',
    fontWeight: 'bold',
    fontSize: '15px'}} to="/about">About</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" style={{textDecoration:'none' , borderBottom:'0px' ,fontFamily: 'Outfit',
    fontWeight: 'bold',
    fontSize: '15px'}} to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" style={{textDecoration:'none' , borderBottom:'0px' ,fontFamily: 'Outfit',
    fontWeight: 'bold',
    fontSize: '15px'}} to="/buyers">Coustomers</NavLink>
        </li>
        {/* <li className="nav-item active">
          <NavLink className="nav-link" to="/login">Login </NavLink>
        </li> */}
        {/* <li className="nav-item active">
          <NavLink className="nav-link" to="/signup">Register </NavLink>
        </li> */}
        <li className="nav-item active">
          <NavLink className="nav-link" style={{textDecoration:'none' , borderBottom:'0px' ,fontFamily: 'Outfit',
    fontWeight: 'bold',
    fontSize: '15px'}} to="/logout">Logout</NavLink>
        </li>
      </ul>
      </>)
    }
    else{
      return (
      <>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        <NavLink className="nav-link" style={{textDecoration:'none' , borderBottom:'0px',fontFamily: 'Outfit',
    fontWeight: 'bold',
    fontSize: '15px'}} to="/">Home </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" style={{textDecoration:'none' , borderBottom:'0px' ,fontFamily: 'Outfit',
    fontWeight: 'bold',
    fontSize: '15px'}} to="/about">About</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" style={{textDecoration:'none' , borderBottom:'0px' ,fontFamily: 'Outfit',
    fontWeight: 'bold',
    fontSize: '15px'}} to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" style={{textDecoration:'none' , borderBottom:'0px' ,fontFamily: 'Outfit',
    fontWeight: 'bold',
    fontSize: '15px'}} to="/buyers">Coustomers</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" style={{textDecoration:'none' , borderBottom:'0px' ,fontFamily: 'Outfit',
    fontWeight: 'bold',
    fontSize: '15px'}} to="/login">Login </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" style={{textDecoration:'none' , borderBottom:'0px' ,fontFamily: 'Outfit',
    fontWeight: 'bold',
    fontSize: '15px'}} to="/signup">Register </NavLink>
        </li>
        {/* <li className="nav-item active">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li> */}
      </ul>
      </>)
    }
  }
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: 'white' }}>
  <NavLink className="navbar-brand" to="/"><img src={imgo} alt="" /></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
   <Rendermenu/>
  </div>
  
</nav>
  </>
  )
}

export default Navbar
