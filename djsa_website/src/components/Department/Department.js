import React from "react";
// import XYZ from "./XYZ";
import Marquee from "react-fast-marquee";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Antariksh_HomePageS2 from "./Antariksh_HomePageS2.jpg";
import "./Department.css";

import coding from "../Department/coding.png";
import elex from "../Department/elex.png";
import marketing from "../Department/marketing.png";
import mech from "../Department/mech.png";
import sci from '../Department/sci.png';

function Department() {
  return (
    <div>
      <div className="Dept_container">
        <div className="Dept_star"></div>
        <div>
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            <Card className="skill--box">
              <CardContent>
                <img className="image" src={coding} height={500} width={700} />
              </CardContent>
            </Card>

            <Card className="skill--box">
              <CardContent>
                <img className="image" src={sci} height={500} width={700} />
              </CardContent>
            </Card>
            <Card className="skill--box">
              <CardContent>
                <img className="image" src={elex} height={500} width={700} />
              </CardContent>
            </Card>
            <Card className="skill--box">
              <CardContent>
                <img className="image" src={marketing} height={500} width={700} />
              </CardContent>
            </Card>
            <Card className="skill--box">
              <CardContent>
                <img className="image" src={mech} height={500} width={700} />
              </CardContent>
            </Card>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Department;
