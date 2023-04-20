import React, { useEffect, useState } from 'react';
import jimnycarpic from "./final_jimmy_.png" 
import '../styles/home.css'

const Home = () => {
  const [persondata, setpersondata] = useState({ name: 'Welcomes you', headline: "Welcomes you" });

  const helper = async () => {
    try {
      const res = await fetch('https://api-08sb.onrender.com/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      setpersondata({ name: data.name, headline: 'Happy to see you back' });
      console.log(data);

      if (!res.status === 200) {
        console.log('bc');
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      console.log('mc');
    }
  };

  useEffect(() => {
    helper();
  }, []);

  return (
    <>
       <div className="dashboards">
      

      <div className="grid-containers">
        <div className="grid-items">
          <img src={jimnycarpic} alt="BigCo Inc. logo" />
        </div>

        <div className="grid-itemnews nameheadings grid-containers">
          <div className="textfornames">
            <h2>maruti suzuki</h2>
            <h1 id="typing-headings">{persondata.name}</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;