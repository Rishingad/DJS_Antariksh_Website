import React from 'react'
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


