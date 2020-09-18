import React from 'react'
import Project from './Project'
import styled from 'styled-components';

const ProjectsDivStyle = styled.section`
width:100%;
display: flex;
justify-content: center;
  flex-direction: column;
.title-image{
  height:10rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 600px) {
  .title-image{
    height:6rem;
    
  }
  

}

@media  (min-width : 600px) and (max-width: 800px) {
  .title-image{
    height:8rem;
    
  }
  
}
`;

const ProjectsStyle = styled.div`
  display:grid;
  flex: 1;
  box-sizing: border-box;
  width:90%;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;

  grid-column-gap: 10px;
  grid-row-gap: 2rem;

  grid-template-columns: 33% 33% 33%;

  @media (max-width: 600px) {
    grid-template-columns: 90%

  }

  @media  (min-width : 600px) and (max-width: 800px) {
    grid-template-columns: 45% 45%
 
  }


`;

const Projects = () => {
    return (
      <ProjectsDivStyle id="projects">
              <h2 id="section3"></h2>

            <img className="title-image" src="/img/projects-title.png"></img>
        <ProjectsStyle>
            <Project key="1" title="Doctor api" imgSource="/icons/others/api.png" description="Test description"/>
            <Project key="2" title="Doctor api" imgSource="/icons/others/api.png" description="Test description"/>
            <Project  key="3" title="Doctor api" imgSource="/icons/others/api.png" description="Test description"/>
            <Project  key="4"title="Doctor api" imgSource="/icons/others/api.png" description="Test description"/>
            

            
        </ProjectsStyle>
        </ProjectsDivStyle>

    )
}

export default Projects
