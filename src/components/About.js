import styled from "styled-components";
import React from "react";
import Particles from 'react-particles-js';

const AboutStyles = styled.section`
  width: 100%;
  max-height: 100vh;
  background-color: #6d4773;
  display: flex;
    color: white;

  
  .particles {
    width: 100%;
    position:absolute;
    height:100%;

  }
  .about {
    align-items: center;

    z-index: 2;
    margin: 0 auto;
    margin-top: 5rem;
    display:flex-column;
    img {
      width: 100%;
  height: auto;
    @media screen and (max-width: 600px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      
  }
    }
    p {
      width: 65vh;
      font-size: 1.2rem;
      display:inherit;
      @media screen and (max-width: 600px) {
        width: auto;
        font-size:1rem;
        margin-left:1rem;
        margin-right:1rem;

      }
    }

    .title {
      .title-name-1 {
        color: black;
      }

      @media screen and (max-width: 600px) {
        align-items: center;

        width: auto;
        font-size:1rem;
        margin-left:1rem;
        margin-right:1rem;

      }
    }
  }


`;

const AboutMe = ({translations}) => {

  return (
    <AboutStyles id="aboutme">
      <Particles className="particles"

    params={{
	    "particles": {
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": true
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
      

      <div className="about">
        <img src="/img/Name.png"></img>
        <p className="explain">
          {translations.description}
        </p>
      </div>
    </AboutStyles>
  );
};

export default AboutMe;
