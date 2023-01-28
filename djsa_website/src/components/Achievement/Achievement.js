import React from 'react'
import './Achievement.css'
// import Antariksh_HomePageS2 from './Antariksh_HomePageS2.jpg';
// import AntarikshLogo_Zoom from './AntarikshLogo_Zoom.png'
import science_award from './science_award.jpg'
import navigation_award from './navigation_award.jpg'
import back from './back.png'

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function Achievement() {
  return (
    <div>
      <div className='Achievement_container'>
        <div className='star'></div>

        <Swiper
          sx={{
            width: 700
          }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='skew'>
          <div className='skew_img'>
            <img src={science_award}></img>
          </div>
          <div className='skew_content_container'>
            <div className='skew_content'>
              <p className='heading'>European Rover Challenge 2022</p>
              <div className='text'>
                <div className='text1'>
                  <p className='sub-text1'>~ 1st Position Worldwide - Remote Edition</p>
                </div>
                <div className='text1'>
                  <p className='sub-text2-1'>~ 1st Asian Team to be the</p>
                  <p className='champ'>CHAMPIONS OF ERC</p>
                  <p className='sub-text2-2'>for two consecutive years</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='skew'>
          <div className='skew_img'>
            <img src={navigation_award}></img>
          </div>
          <div className='skew_content_container'>
            <div className='skew_content'>
              <p className='heading'>European Rover Challenge 2021</p>
              <div className='text'>
                <div className='text1'>
                  <p className='sub-text1'>~ 1st Position Worldwide - Remote Edition</p>
                </div>
                <div className='text1'>
                  <p className='sub-text1'>~ BEST TEAM : <p className='sci'>SCIENCE && NAVIGATION</p></p>
                  
                  {/* <p className='nav'>NAVIGATION</p> */}
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
        {/* <div className='skew'>
          <div className='skew_img'>
            <img src={science_award}></img>
          </div>
          <div className='skew_content_container'>
            <div className='skew_content'>
              <p className='heading'>European Rover Challenge 2022</p>
              <div className='text'>
                <div className='text1'>
                  <p className='sub-text1'>~ 1st Position Worldwide - Remote Edition</p>
                </div>
                <div className='text1'>
                  <p className='sub-text2-1'>~ 1st Asian Team to be the</p>
                  <p className='champ'>CHAMPIONS OF ERC</p>
                  <p className='sub-text2-2'>for two consecutive years</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Achievement;
