import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/ashish-mohan-b72512194/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/doniszb94/image/upload/v1662580926/photo/IMG_20210914_091550_xcornm.jpg"
              alt="Founder"
            />
            <Typography>Ashish Mohan</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This wesbite is made by Ashish Mohan
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/ashish-mohan-b72512194/" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
