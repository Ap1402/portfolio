import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import React from "react";
import Carousel from 'react-elastic-carousel'
import SkillsItem from "./SkillsItem";

const SkillsStyles = styled.section`
  text-align: center;
  padding: 2rem;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 40%, rgba(109,71,115,1) 60%);
  .skills {
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;


    @media screen and (max-width: 850px) {
      display: flex;
      width: calc(100% - 5rem);
      flex-direction: column;
      justify-self: center;
      align-items: center;
      margin-bottom: 5rem;
    }

  }

  p {
    font-size: 1.3rem;
    display: flex;
    width: 65vh;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1600px) {
    font-size: 1rem;
    width: auto;
    p {
      font-size: 1.2rem;
      width: 50vh;
    }
  }

  @media screen and (max-width: 850px) {
    p {
      width: auto;
    }
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
    width: auto;
  }

`;
//const backendIcons = getIcons("backend");

const Skills = ({translations}) => {
  const [ref, inView] = useInView({
    threshold: 1,
  });

 const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 1 },
  { width: 850, itemsToShow: 2 },
  { width: 950, itemsToShow: 3 },

]
  return (
    <SkillsStyles id="skills" >

      <Carousel easing="cubic-bezier(1,.15,.55,1.54)"
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                transitionMs={700}
                breakPoints={breakPoints}
               itemPadding={[10, 0, 20,0]}
               >

      <SkillsItem title={'Frontend'} platforms={['React', 'Javascript', 'HTML5', 'CSS3', 'Sass', 'Redux']}/>
      <SkillsItem title={'Backend'} platforms={['Node-Js', 'PHP', 'mySQL','Mongodb']}/>
      <SkillsItem title={'Others'} platforms={['Git', 'Jest', 'Postman', 'Bash','Docker']}/>

      </Carousel>

    </SkillsStyles>
  );
};

export default Skills;
