import styled from "styled-components";
import React from "react";

const SkillIconStyle = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  span {
    display: none;
    position: absolute;
    z-index: 1;
    width: 120px;
    background-color: purple;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 2px 0;
  }

  &:hover {
    span {
      display: block;
    }
  }
`;

const SkillsIcons = ({ skillSet, platform }) => {

  const getIconSrc = (skillSet, platform) =>{
    const iconSrc = './icons/'+skillSet.toLowerCase()+'/' + platform.toLowerCase() + '.svg'
    return iconSrc
   }

   return (
      <SkillIconStyle>
          <img alt={platform }src={getIconSrc(skillSet,platform)}></img>
          <span>{platform}</span>
      </SkillIconStyle>
   )
}
export default SkillsIcons;
