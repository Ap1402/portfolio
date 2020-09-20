import React from "react";
import styled from "styled-components";

const ProjectStyle = styled.div`
  border-radius: 20px;
  padding: 10px;
  width: 90%;
  transition: box-shadow 0.3s linear, background-color 0.4s linear;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: -5px -5px 21px #5e5577, 5px 5px 21px #766995;
    background-color: rgba(120, 40, 240, 0.1);
  }
  .work-image {
    height: 90%;
    width: 90%;
    margin:1rem;
    vertical-align:middle;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }

  .project-text {
    width: 100%;
    text-align: center;

    .code-image{
      border-radius: 10px;
        height: 2rem;
        border: 2px solid black;
        padding: 2px;
        transition: background-color 0.15s linear;
        margin: 1rem;
        &:hover{
           background-color: #c0c0c0;
        }
    }
  }

  
  @-webkit-keyframes hvr-hang {
    0% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    50% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
    100% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
  }
  @keyframes hvr-hang {
    0% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    50% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
    100% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
  }
  @-webkit-keyframes hvr-hang-sink {
    100% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
  }
  @keyframes hvr-hang-sink {
    100% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
  }
  &:hover, &:focus, &:active {
    -webkit-animation-name: hvr-hang-sink, hvr-hang;
    animation-name: hvr-hang-sink, hvr-hang;
    -webkit-animation-duration: .3s, 1.5s;
    animation-duration: .3s, 1.5s;
    -webkit-animation-delay: 0s, .3s;
    animation-delay: 0s, .3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }



`;

const Project = ({ title, description, imgSource, codeURL, websiteURL }) => {
  console.log(codeURL)
  return (
    <ProjectStyle>

      <div className="work-image">
        <img src={imgSource} alt="Api" />
      </div>
      <div className="project-text">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <a href={codeURL}>
        <img className="code-image" src="/icons/code.svg" alt="Api" />
        </a>
        {websiteURL!=="none"&&
        <a href={websiteURL}>
        <img className="code-image" src="/icons/websiteIcon.png" alt="website" />
        </a>
      }

      </div>
    </ProjectStyle>
  );
};

export default Project;
