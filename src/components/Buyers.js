import React from 'react'
import { useState, useEffect } from 'react';

import '../styles/buyers.css'
  

const Buyers = () => {
  const [latestUsers, setLatestUsers] = useState([]);

  useEffect(() => {
    async function fetchLatestUsers() {
      const response = await fetch('https://api-08sb.onrender.com/buyerslist');
      const data = await response.json();
      setLatestUsers(data);
    }
    fetchLatestUsers();
  }, []);

  const carImages = {
    'Alto': 'https://media.zigcdn.com/media/model/2023/Feb/alto-800_600x400.jpg',
    'Brezza': 'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/107807/brezza-left-front-three-quarter.jpeg?isig=0&q=75',
    'Swift': 'https://media.zigcdn.com/media/model/2023/Feb/swift_600x400.jpg',
    'Ertiga': 'https://media.zigcdn.com/media/model/2023/Feb/ertiga_600x400.jpg',
    'Baleno': 'https://media.zigcdn.com/media/model/2023/Feb/baleno_600x400.jpg',
    'Dzire': 'https://media.zigcdn.com/media/model/2023/Feb/swift_600x400.jpg',
    'Wagonr': 'https://media.zigcdn.com/media/model/2023/Feb/wagon-r_600x400.jpg',
    'Eeco': 'https://media.zigcdn.com/media/model/2023/Feb/eeco_600x400.jpg',
    'S-Presso': 'https://media.zigcdn.com/media/model/2023/Feb/s-presso_600x400.jpg',
    'XL6': 'https://media.zigcdn.com/media/model/2023/Feb/xl-6_600x400.jpg',
    'Ignis': 'https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/ignis/ignis-ex-highlights.webp?modified=20220629061148',
    'Ciaz': 'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/CiazModelImage.jpg',
    'Grand Vitara': 'https://www.drivespark.com/img/1200x60x675/2022/07/maruti-suzuki-grand-vitara-1659116267.jpg',
    'Jimny': 'https://media.zigcdn.com/media/model/2023/Jan/maruti_jimny_600x400.png',
    'Fronx': 'https://media.zigcdn.com/media/model/2023/Jan/fronx_600x400.jpg',
  };


return (
  <>
  
  <div className="testboxcontainer">
      <div className="extrabox"></div>
       <div className="extrabox"></div>

       <div  className = "testbox" >
     
      <h1>DISPLAY SECTION</h1>
     
    </div>
    <div className="extrabox"></div>
    <div className="extrabox"></div>
    </div>
    
    <div className="grid-container">
      {latestUsers.map(user => {
        const date_string = user.date;
        const date_obj = new Date(date_string);
        const datelo = date_obj.toISOString().split('T')[0];
        return (
        <div className="grid-item">
              <img src={carImages[user.car]} alt={user.car} />
          <div>
              <div className="carname">
                  <h6>{user.car}</h6>
              </div>
              <span></span>
              <div className="names" >Buyer Name: {user.name}</div>
              <div className="names" >Location: {user.location}</div>
              <div className="names" style={{ borderBottomLeftRadius: '10px'}}>Colour: white</div>
          </div>
        </div> 
          
        );
      })}
    </div>
  </>
);
}

export default Buyers



  




  




// import React from 'react';
// import '../styles/buyers.css'
// function Buyers() {
//   return (
//     <div className="grid-container">
//       <div className="grid-item">
//         <img src='' alt="BigCo Inc. logo"/> 
//         <div>
//           <div className="carname">
//             <h6> {user.car} </h6>
//           </div>
//           <span></span>
//           <div className="names"> Buyer Name : {user.name}  </div>
//           <div className="names"> location : {user.location}</div>
//           <div className="names"> Colour : white </div>
//         </div>
//       </div> 
//     </div>
//   );
// }

// export default Buyers;
