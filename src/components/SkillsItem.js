import React from 'react'
import styled from 'styled-components';
import SkillsIcons from './SkillIcon';

const SkillSetStyle = styled.div`
        :focus{
          outline:none;
        }
        h2  {
          text-shadow: 0 0 10px #FFFFFF, 2px 2px 7px rgba(248,202,255,0.53);    
          font-size:2rem;
        }
        .platforms {
            position: relative;
            display: grid;
            justify-items: center;
            padding:3rem;
            grid-template-columns: 4rem 4rem 4rem;
            gap: 2rem;

            background: rgba(255, 255, 255, 0.50); 
            border-radius: 32px;

            box-shadow:  -5px -5px 21px #5e5577, 
             5px 5px 21px #766995;
             
            img {
                margin-left:20px;
                margin-right:20px;
                opacity:1;
                height: 4rem;
            }

          }

          @media only screen and (max-width: 600px) {
            .platforms {
              grid-template-columns: 4rem 4rem;
              gap: 0.5rem;
            }

            img {
              height: 3rem;
            }
          }

          @media only screen and (max-width: 450px) {
            .platforms {
              grid-template-columns: 2rem 2rem;
              gap: 2rem;
            }
          }
`;

const SkillsItem = ({title, platforms}) =>{
   return (
    <SkillSetStyle>
        <h2>{title}</h2>
        <div className="platforms">

        {platforms.map(( platform)=> (
            <SkillsIcons skillSet={title} platform={platform}></SkillsIcons>
            ))}
        </div>

    </SkillSetStyle>)
    
}



export default SkillsItem
