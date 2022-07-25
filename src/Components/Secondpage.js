import React from 'react'
import './Secondpage.css';
 

function Secondpage() {
    
  return (
    <div>
      <header>
       <a href="#" className="logo"><img src="C:\Users\jaina\OneDrive\Desktop\rajya-sabha\images\logo.jpg"/></a>
       <a href="#" className="logo2"><img src="C:\Users\jaina\OneDrive\Desktop\rajya-sabha\images\logo2.png"/></a>
       <div className="search">
           <input type="text" placeholder="Search"/>
           <i className="fa-regular fa-magnifying-glass"></i>
       </div>
    </header>
    <div className="navbar">
        <ul>
            <li>HOME</li>
            <li>RAJYA SABHA</li>
            <li>MEMBERS</li>
            <li>COMMITTES</li>
            <li>PROCEDURES</li>
            <li>SECRETARIAT</li>
            <li>PUBLICATIONS</li>
        </ul>
    </div>
    <div className="cont">

        
        <div className="profile">
            <img src="C:\Users\jaina\OneDrive\Desktop\rajya-sabha\images\chairman.jpg"/>
            <div className="name">M. Venkaiah Naidu</div>
            <div className="title">Chairman, Rajya Sabha</div>
            
        </div>
        <div className="sliderbox">
            <div id="slider">
                <img src="C:\Users\jaina\OneDrive\Desktop\rajya-sabha\images\slider.jpg"/>
                <img src="C:\Users\jaina\OneDrive\Desktop\rajya-sabha\images\back2.jpg"/>
            </div>
            <div className="indicators">
                <span id="btn1" className="active"></span>
                <span id="btn2"></span>

            </div>
        </div>

        <div className="profile">
            <img src="C:\Users\jaina\OneDrive\Desktop\rajya-sabha\images\dc.jpg"/>
            <div className="name">Harivansh N Singh</div>
            <div className="title">Deputy Chairman, Rajya Sabha</div>
            
        </div>
        
    </div>

    </div>
  )
  
    
};

export default Secondpage
