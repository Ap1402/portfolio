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

  .contact {
    display: inline-block;
    margin-left: 15%;
    margin-right: 15%;
    vertical-align: middle;

    img, h1,a,p{
      vertical-align: middle;

    }
    p, a {

      img {
        cursor: pointer;
        margin-right: 0.9rem;
        height: 4rem;
        width: auto;
        &:hover {
          filter: opacity(50%);
        }
      }
      display: inline-block;
      align-content: center;
      margin: 0;
      font-size: 1.5rem;
      outline: none;
      color: black;
    }

    p {
      display:inline-block;
      img {
        height: 2rem;
        margin-left: 0.2rem;
        width: auto;
      }
    }
    h1 {
      font-size: 3.3rem;
      font-weight: bold;
    }
    h2 {
      font-size: 1.5rem;
      justify-self: center;
    }

    @media screen and (max-width: 850px) {
      margin: 1rem;
    }
  }

  .contactForm {
    display: inline-block;
    margin-right: 10%;
  }

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    .contact {
      text-align: center;
      h1 {
        font-size: 2.5rem;
      }
      h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      p,
      a {
        font-size: 1rem;
      }
    }
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
            <a href="https://www.linkedin.com/in/p-santisoflz/">
       <img src="/icons/linkedin.svg" alt="LinkedIn" />
     </a>
     <a href="https://github.com/Flz14">
              {" "}
              <img src="/icons/github.svg" alt="Github" />
            </a>
            <a href="mailto:andres.pintosantiso@gmail.com">
              <img src="/img/send-mail.png" alt="mail" />
            </a>
                   </div>
          <div className="contactForm">
            <Form translations={translations} />
          </div>
        </ContactStyles>
  );
};

export default ContactMe;
