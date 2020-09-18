import React from "react";
import styled from "styled-components";

const ProjectStyle = styled.div`
  border-radius: 20px;
  padding: 10px;
  width: 90%;
  transition: box-shadow 0.3s linear, background-color 0.4s linear;

  &:hover {
    box-shadow: -5px -5px 21px #5e5577, 5px 5px 21px #766995;
    background-color: rgba(120, 40, 240, 0.1);
  }
  .work-image {
    height: 20%;
    width: 100%;
    box-sizing: content-box;
    img {
      width: 100%;
    }
  }

  .project-text {
    width: 100%;
    align-items: center;
    text-align: center;

    .code-image{
      border-radius: 10px;
        height: 2rem;
        border: 2px solid black;
        padding: 2px;
        transition: background-color 0.15s linear;
        &:hover{
           background-color: #c0c0c0;

        }
    }
  }
`;

const Project = ({ title, description, imgSource }) => {
  return (
    <ProjectStyle>

      <div className="work-image">
        <img src={imgSource} alt="Api" />
      </div>
      <div className="project-text">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <img className="code-image" src="/icons/code.svg" alt="Api" />
      </div>
    </ProjectStyle>
  );
};

export default Project;
