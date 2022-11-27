import React from 'react'
import './Footer.css'
import Antariksh_HomePageS2 from './Antariksh_HomePageS2.jpg';
import SponsorCard from './Card.js';
import { Button, Card } from '@mui/material';

// For Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div>
      <div className='Footer_container'>
        <div className='starF'></div>
        
        <div className='iconBar'>
          <LinkedInIcon sx={{ color: '#FFF' }} onClick={event =>  window.location.href='https://www.linkedin.com/company/djs-antariksh/mycompany/'}  className='icons'></LinkedInIcon>
          <InstagramIcon sx={{ color: '#FFF' }} onClick={event =>  window.location.href='https://www.instagram.com/djs_antariksh/?hl=en'} className='icons'/>
          <FacebookIcon sx={{ color: '#FFF' }} onClick={event =>  window.location.href='https://www.facebook.com/people/DJS-Antariksh/100063880216755/'}  className='icons'/>
          <YouTubeIcon sx={{ color: '#FFF' }} onClick={event =>  window.location.href='https://www.youtube.com/channel/UCoksi6M-WBSJKU75hEfsfjg'} className='icons'/>
        </div>
        <h1>#TODECIPHERUNIMAGINABLE</h1>
      </div>
    </div>
  )
}

export default Footer;