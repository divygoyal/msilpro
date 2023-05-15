import React, { useEffect, useState } from 'react';
import '../styles/home.css'

const Home = () => {
  const [persondata, setpersondata] = useState({
    name: 'Welcomes you',
    headline: 'Welcomes you',
  });
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
        const p = 3;
        for (let i = 0; i < p; i++) {
          const obj = {
            topic: articles[i]['title'],
            summary: articles[i]['description'],
            imgurl: articles[i]['image'],
            readmore: articles[i]['url'],
            sourcename: articles[i]['source'].name,
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
        credentials: 'include',
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
      <div className="exit">
        <div className="imgcontainer">
          <img src="https://i.postimg.cc/59HZZS5z/JIMNYY.png" alt="" />
        </div>
        <div className="textcontainer">
          {/* <h2 style={{fontSize:"60px" , padding:"0" , margin:"0" , fontFamily :"Wix Madefor Display" , letterSpacing: "10px"}}>DIVY</h2> */}
          <h1 style={{fontFamily: 'Racing Sans One', fontSize: '70px', padding: '0', marginBottom: '10px' }}>
            DRIVE WITH THRILL{' '}
          </h1>
        </div>
      </div>

      <div className="herocontainer" style={{ marginTop: '100px' }}>
        <h1 style={{ fontFamily: 'Racing Sans One',fontSize: '70px', padding: '0', marginBottom: '50px' }}>
          MEET OUR NEW HEROES !
        </h1>
        <div className="carherocontainer">
          <div className="cardetail">
            <div className="heroimgcontainer">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1673943130006/front-left-side-47.jpg?tr=w-456"
                alt=""
                target="https://www.nexaexperience.com/fronx"
              />
            </div>

            <h2 style={{ fontFamily: 'Racing Sans One', fontSize: '40px' }}>
              Fronx
            </h2>
          </div>
          <div className="cardetail">
            <div className="heroimgcontainer">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Jimny/6182/1673507280721/front-left-side-47.jpg?tr=w-456"
                alt=""
                target="https://www.nexaexperience.com/fronx"
              />
            </div>

            <h2 style={{ fontFamily: 'Racing Sans One', fontSize: '40px' }}>
              Jimny
            </h2>
          </div>
          <div className="cardetail">
            <div className="heroimgcontainer">
              <img
                src="https://prathamnyaynews.com/wp-content/uploads/2023/04/Maruti-Suzuki-Engage.jpg"
                alt=""
                target="https://www.nexaexperience.com/fronx"
              />
            </div>

            <h2 style={{ fontFamily: 'Racing Sans One', fontSize: '40px' }}>
              Engage
            </h2>
          </div>
        </div>
      </div>

      <div className="newscontainer">
        <h1 style={{ fontFamily: 'Racing Sans One', fontSize: '60px' }}>
          PICKS FOR YOU
        </h1>
        {cont.map((item, index) => (
          <div className="mainnewscontainer">
            <div className="articlecontainer">
              <h2 style={{ textAlign: 'left', fontFamily: 'Racing Sans One' }}>
                {item.sourcename}
              </h2>
              <h3
                style={{
                  fontFamily: 'Outfit',
                  fontSize: '25px',
                  fontWeight: '50',
                }}
              >
                {item.summary}
              </h3>
            </div>
            <div className="newsimgcontainer">
              <img src={item.imgurl} alt="" />
            </div>
          </div>
        ))}
      </div>


      <div className="mapscontiner">
      <h1 style={{fontFamily :"Racing Sans One" , fontSize:"60px" , fontWeight :"400"}}>FIND US ON MAP </h1>
     
      <div className ="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.420256819998!2d77.06071957443979!3d28.497001090224327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196b71b25ce7%3A0xa2c70ccdf3d18c30!2sMaruti%20Suzuki%20India%20Limited!5e0!3m2!1sen!2sin!4v1684134167445!5m2!1sen!2sin"  ></iframe>
      </div>
    </div>

      <div className="kmcontainer">
        <h1 style={{ fontSize: '70px', padding: '0', marginBottom: '10px' }}>
          HOW FAR HAVE YOU DRIVEN ?
        </h1>
        <h1 className="km" style={{ fontFamily: 'Orbitron' }}>
          8428 Km
        </h1>
      </div>
    </>
  );
};

export default Home;
