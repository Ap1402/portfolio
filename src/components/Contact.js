import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Form from "./Form";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import React from "react";
import Axios from "axios";
import { useSelector } from "react-redux";

const ContactStyles = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  margin-top: 10px;
  justify-content: center;
  .contact {
    display: inline-block;
    margin-right:10rem;
    width:40%
    img{
      vertical-align:middle;
    }
    a {
      align-content: center;
      margin: 0;
      font-size: 1.5rem;
      outline: none;
      img {
        cursor: pointer;
        height: 4rem;
        justify-self:center;
        &:hover {
          filter: opacity(50%);
        }
      }
    }

    h1 {
      font-size: 3.7rem;
      font-weight: bold;
      color: #604b78;
    }

    @media screen and (max-width: 850px) {
      margin: 1rem;
    }
  }

  .contactForm {
    width:40%

    display: inline-block;
  }

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    .contact {
      text-align: center;
      h1 {
        font-size: 2.5rem;
      }
      p,
      a {
        font-size: 1rem;
      }
    }
  }


  @-webkit-keyframes hvr-pulse-grow {
    to {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  @keyframes hvr-pulse-grow {
    to {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  .hvr-pulse-grow:hover, .hvr-pulse-grow:focus, .hvr-pulse-grow:active {
    -webkit-animation-name: hvr-pulse-grow;
    animation-name: hvr-pulse-grow;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
  }
`;

const ContactMe = ({ translations }) => {
  const [ref, inView] = useInView({
    threshold: 0.8,
  });

  return (
    <ContactStyles ref={ref} id="contact">
      <div className="contact">
        <h1>{translations.title}</h1>
        <a  href="https://www.linkedin.com/in/p-santisoflz/">
          <img src="/icons/linkedin.svg" className ="hvr-pulse-grow" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Flz14">
          <img src="/icons/github.svg" className ="hvr-pulse-grow" alt="Github" />
        </a>
        <a href="mailto:andres.pintosantiso@gmail.com">
          <img src="/img/send-mail.png" className ="hvr-pulse-grow" alt="mail" />
        </a>
      </div>
      <div className="contactForm">
        <Form translations={translations} />
      </div>
    </ContactStyles>
  );
};

export default ContactMe;
