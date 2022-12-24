import React, { useEffect, useState} from 'react' 
import "./covid.css";

const Covid = ()=>{ 


    const [data,setdata]=useState([]);


    const  getCovidData =async()=>{

        try {
            const res= await fetch('https://data.covid19india.org/data.json');
            const finaldata =await res.json();
            console.log(finaldata.statewise[0]);
            setdata(finaldata.statewise[0]);
        }catch(e){
            console.log(e);
        }
        
    }

useEffect(() => {
  getCovidData();
}, [])

  return (
    <>
    <div class="mainbody">
    <h2>🔴LIVE CORONAVIRUS TRACKER</h2>
    
    <div class="ul">
    <section id= "services">
        <div className='card'>
          <div className='card2'>
            <div className='card3'>
              <p className='cname'><span>OUR </span>COUNTRY</p>
              <p className='cdname'>INDIA</p>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card2'>
            <div className='card3'>
              <p className='cname'><span>TOTAL </span>RECOVERED</p>
              <p className='cdname'>{data.recovered}</p>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card2'>
            <div className='card3'>
              <p className='cname'><span>TOTAL </span>ACTIVE</p>
              <p className='cdname'>{data.active}</p>
            </div>
          </div>
        </div> 
        </section>
        <section id="service2">
        <div className='card'>
          <div className='card2'>
            <div className='card3'>
              <p className='cname'><span>TOTAL </span>DEATHS</p>
              <p className='cdname'>{data.deaths}</p>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card2'>
            <div className='card3'>
              <p className='cname'><span>TOTAL </span>CONFIRMED</p>
              <p className='cdname'>{data.confirmed}</p>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card2'>
            <div className='card3'>
              <p className='cname'><span>LAST </span>UPDATED</p>
              <p className='cdname'>{data.lastupdatedtime}</p>
            </div>
          </div>
        </div>
        </section>
    </div>
    </div>
    </>
  )
}

export default Covid
