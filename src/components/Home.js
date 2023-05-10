import React, { useEffect, useState } from 'react';
import jimnycarpic from "./final_jimmy_.png" 
import '../styles/home.css'

const Home = () => {
  const [persondata, setpersondata] = useState({ name: 'Welcomes you', headline: "Welcomes you" });
////////////
  const [cont, setcont] = useState([]);
  const fetchData = async () => {
      const apikey = '4d20f35e59e04130c1c13a8810a3dfde';
      const url =
        'https://gnews.io/api/v4/search?q=suzuki&&country=in&lang=en&&max=10&apikey=' +
        apikey;

      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          const articles = data.articles;
          const p = 5;
          for (let i = 0; i < p; i++) {
            const obj = {
              topic: articles[i]['title'],
              summary: articles[i]['description'],
              imgurl: articles[i]['image'],
              readmore: articles[i]['url'],
            };

            setcont((prevArray) => [...prevArray, obj]);
            console.log('Title: ' + articles[i]['title']);

            console.log('Description: ' + articles[i]['description']);
          }
        });
    };
  ////////////
  const helper = async () => {
    try {
      const res = await fetch('https://api-08sb.onrender.com/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include"
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
     fetchData();
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

 <div className="newsheading">
        <h1 style={{ fontFamily: 'Outfit' , marginTop:"20px" }}>Trends</h1>
      </div>

      {/* <p>Start editing to see some magic happen :)</p> */}

      {cont.map((item, index) => (
        <div
          style={{
            width: '70%',
            backgroundColor: 'white',
            alignItem: 'center',
            margin: 'auto',
            marginBottom: '6px',
            display: 'flex',
          }}
        >
          <div class="imageContainer">
            <img class="image" src={item.imgurl} alt="" />
          </div>

          <div
            style={{
              margin: '20px',
              padding: '5px',
              paddingTop: '2px',
              marginTop: '4px',
              width: '60%',
              alignItem: 'center',
              justifyContent: 'center',
            }}
          >
            <h3 className="head">{item.topic}</h3>
            <p1 className="sum">{item.summary}</p1>
            <br />
            <br />
            <p3>
              <a href={item.readmore}>read more</a>
            </p3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
