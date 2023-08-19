import React, { createContext, useReducer } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Login'
import About from './components/About'
import Signup from './components/Signup'
import ContactForm from './components/Contactform'
import Logout from './components/Logout'
import { Switch } from 'react-router-dom'
import {initialstate , reducer} from '../src/reducer/Usereducer'
import {Route,Routes} from 'react-router-dom';
import Buyers from './components/Buyers'
export const usercontext = createContext();
import "../styles/App.css";

const Routingg=()=>{
  return (
  <Switch>
  <Route exact path ="/">
    <Home/>
  </Route>
  <Route path ="/login">
      <Login/>
  </Route>
  <Route path ="/signup">
    <Signup/>
  </Route>
  <Route path ="/contactdg">
    <ContactForm/>
  </Route>
  <Route path ="/about" >
    <About/>
  </Route>
  <Route path ="/contact" >
    <Contact/>
  </Route>
  <Route path ="/logout">
    <Logout/>
  </Route>
  <Route path ="/buyers">
    <Buyers/>
  </Route>
  </Switch>
  )
}
  
const App = () => {
  const [state , dispatch] = useReducer(reducer , initialstate);
  return (
    
    <div>
    
    <usercontext.Provider value = {{state ,dispatch}}>
      <Navbar/>
      
      <Routingg />
    </usercontext.Provider>
   
    


    
    </div>
  )
  
  }
  

  


export default App
