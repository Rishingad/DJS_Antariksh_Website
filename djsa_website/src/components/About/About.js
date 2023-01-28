import React from "react";
// import './About.css'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
//npm install react-spring
// npm install @react-spring/parallax
import styles from "./styles.module.css";

function About() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div className={styles.grid}>
    
    
         <div className={styles.background}> 
          <Parallax pages={1.5}>
            <ParallaxLayer
              sticky={{ start: 0, end: 2 }}
              style={{ ...alignCenter, justifyContent: "flex-start" }}
            >
              <div className={`${styles.card} ${styles.sticky}`}>
                <p>ROTATING ROVER IMAGE</p>
              </div>
            </ParallaxLayer>
            {/* Above one is the sticky layer where the rover will rotate */}
            <ParallaxLayer
              offset={0}
              speed={3}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <div
                className={`${styles.card} ${styles.parallax} ${styles.about}`}>
                <div>
                <p>
                  <div className={`${styles.heading}`}>
                  <p>ABOUT US</p>
                  </div>
                  <div className={`${styles.para}`}>             
                  Established in 2019-20, DJS Antariksh is the
                  official Martian Rover Team of Dwarkadas J. Sanghvi College of
                  Engineering. The team consisting of 40 enthusiastic students
                  from all engineering branches, working under 5 different
                  departments, aims to expand the horizons of innovation by
                  optimal usage of technology and in turn, develop
                  next-generation Martian Rovers that are capable of deciphering
                  many Martian secrets. DJS Antariksh supports one's curiosity
                  and willingness to develop in an enriching environment by
                  encouraging practices of diversity and teamwork.
                  </div> 
                  </p>
                </div>
              </div>
              
            </ParallaxLayer>
            {/* 1st scrolling layer */}
            
            <ParallaxLayer
              offset={0.5}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <div
                className={`${styles.card1} ${styles.parallax} ${styles.vision}`}
              >
                <p>
                <div className={`${styles.heading}`}>
                  <p>VISION</p>
                  </div>
                  <div className={`${styles.para}`}>
                  To expand horizons of innovation by optimal usage of
                  technology and in turn develop a High Technology Martian Rover
                  which will decipher many Martian secrets. The developed
                  technology will thus prove to be the biggest tool to inspire
                  the spirit of space exploration. 
                  </div>
                </p>
              </div>
            </ParallaxLayer>
            {/* 2nd scrolling layer */}

            <ParallaxLayer
              offset={0.99}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: "flex-end" }}
            >
              <div
                className={`${styles.card2} ${styles.parallax} ${styles.mission}`}
              >
                <p>
                <div className={`${styles.heading}`}>
                  <p>MISSION</p>
                  </div>
                  <div className={`${styles.para}`}>
                  • To design an exceptional Martian Rover with the integration of diverse technology tools and be the leaders in the field of Advance Technology.
                  • To maintain the highest levels of professionalism, integrity, honesty, and fairness in our relationships with our suppliers, professional associates, and collaborators.
                  • To sustain an enriching environment through diversity and teamwork.
                  • To be a team that inspires and fulfills your curiosity.
                  </div>
                </p>
              </div>
            </ParallaxLayer>
            {/* 3rd scrolling layer */}

            
          </Parallax>
        </div>
        
      {/* </div> */}
       <div className='star'></div> 
    </div>
  );
}


export default About;
