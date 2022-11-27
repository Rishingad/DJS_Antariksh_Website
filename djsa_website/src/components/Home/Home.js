import React, { startTransition } from 'react'
import './Home.css'
import Antariksh_HomePageS2 from './Antariksh_HomePageS2.jpg';
import Mars1 from './Mars1.png'
import M from './M.jpg'
import AntarikshLogo_Zoom from './AntarikshLogo_Zoom.png'


function Home() {
  return (
    <div>
      <div className='Home_container'>
        <div className='star'></div>

        <nav className='nav_container'>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#service">Achievements</a></li>
                <li><a href="#skills">Department</a></li>
                <li><a href="contactUs.html" class="btn">Contact Me</a></li>
            </ul>
        </nav>
        <div className='Mars_rotate'>
          <div className='Mars'></div>
        </div>
        <div className='Antariksh_Logo_container'><img src= {AntarikshLogo_Zoom} className='Antariksh_Logo'></img></div>
        
      </div>
      
      {/* <div className='achievement_container'>
        <div className='star'></div>
        <i className='achievement_text'>ACHIEVEMENT</i>
      </div> */}

    </div>
  )
}

export default Home;