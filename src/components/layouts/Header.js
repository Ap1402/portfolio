import React, { useEffect, useState } from "react";
import Nav from "../Navbar";
import NavMovil from "../NavMovil";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const HeaderStyle = styled.header`
width: 100%;
display: flex;
.bar {
  background-color: ;
  padding: 2rem 0rem;

  transition: ease all .5s;
      position: fixed;
      z-index: 3;
        width: 100%;
        padding: 0.4125rem;
       
        @media (max-width: 1300px) {
          justify-content: center;
          font-size: 1.5rem;
          width: 100%;

        }


    }
.scroll {
  padding: 0.2rem 0rem;

  background-color: white;
  -webkit-box-shadow: 0px 4px 7px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 4px 7px -8px rgba(0,0,0,0.75);
  box-shadow: 0px 4px 7px -8px rgba(0,0,0,0.75);
}

  .github-language {
    padding-right: 20px;
    display: inline-block;
    vertical-align: middle;

    a img {
        display: inline-block;
        vertical-align: middle;
        top: 0.3125rem;
        bottom: 0;
        height: 2.5rem;
        width: 2.5rem;
        margin-left: 2rem;
        &:hover {
          filter: opacity(50%);
        }
      }
  
      select {
        margin-left: 1rem;

        display: inline-block;
        vertical-align: middle;
  
        &:hover {
          filter: opacity(50%);
        }
      }
}


  @media screen and (max-width: 700px) {
    .bar {
      display: none;
    }
  }
`;

const Header = ({translations, location}) => {
   useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY <= 10) {
      setbarClassName('')
      setColor({fontColor:'white'})
    }
      else {
        setbarClassName('scroll');
        setColor({fontColor:'black'})
      }

    };
  }, []);

  
  const { language } = useSelector((props) => props.language);
  const dispatch = useDispatch();

  const [color, setColor] = useState({fontColor:'white'});
  const [barClassName, setbarClassName] = useState('');

  const changeHandler = (e) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: e.target.value });
  };

  


  return (
    <HeaderStyle color={color}>
      <div className={"bar "+barClassName} id="navbar">
        <div className="github-language">
          <a href="https://github.com/flz14">
            <img src="/icons/github.png" alt="Github" />
          </a>
          <select
            className="custom-select"
            value={language}
            onChange={(e) => changeHandler(e)}
          >
            <option value="es">Spanish</option>
            <option value="en">English</option>
            <option value="jp">Japanese</option>
          </select>
        </div>
        <Nav translations={translations} fontColor={color.fontColor}/>

      </div>
      <NavMovil  translations={translations}>          <select
            className="custom-select"
            value={language}
            onChange={(e) => changeHandler(e)}
          >
            <option value="es">Spanish</option>
            <option value="en">English</option>
            <option value="jp">Japanese</option>
          </select> </NavMovil>
    </HeaderStyle>
  );
};

export default Header;
