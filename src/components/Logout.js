import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { usercontext } from '../App';
const Logout = () => {
    
    const {state , dispatch}= useContext(usercontext);
    const history = useHistory();
    const helper = async()=> {
        try {
            const res = await fetch('https://api-08sb.onrender.com/logout', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            // const data = await res.json();
      
            if(res.status === 200){
                dispatch({type:"USER" , payload:false})
                history.push('/login');
                return window.alert("logout successfully");
            }
         
            if(!res.status===200  ){
                console.log('bc');
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
        console.log(err);
        console.log("mc");
        history.push('./login');
    }
    }

    useEffect(()=>{
        helper();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Logout
