import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavbarStyle = styled.ul`
  list-style-type: none;
  display: inline-block;
  li {
    display: inline-block;

 }
  & li a {
    display: block;
    padding: 0.5rem;
    text-decoration: none;
    color: ${props=>props.fontColor};
    font-weight: 800;

    margin: 0 10px;
  }

  & li ,
  & li a:after,
  & li a:before {
    transition: all .5s;
  }
  
  /* SHIFT */
  & li  {
    position:relative;
    z-index: 1;
  }
   & li a:hover {
    color: #ffffff;
  }
   & li a:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius:6px;
    margin: auto;
    width: 100%;
    height: 1px;
    content: '.';
    color: transparent;
    box-shadow: 0 0 4px rgba(248,202,255,0.20), 2px 2px 3px rgba(248,202,255,0.20);    
    background:#d343ba ;
    visibility: none;
    opacity: 0;
    z-index: -1;
  }
  & li a:hover:after {
    opacity: 1;
    visibility: visible;
    height: 100%;
  }


  

  .active {
    outline: none;
    &:after {
      width: calc(100% - 3.75rem);
    }
    @media (max-width: 700px) {
      width: calc(100% - 10px);
    }
  }
`;

const Navbar = ({translations, fontColor}) => {

    return (
      <NavbarStyle fontColor={fontColor}>
        <li>
         <AnchorLink offset='20px' href='#aboutme'>{translations.aboutMe}</AnchorLink>
        </li>

        <li>
        <AnchorLink offset='20px' href='#skills'>{translations.skills}</AnchorLink>

        </li>

        <li>
        <AnchorLink offset='20px' href='#projects'>{translations.myProject}</AnchorLink>
        </li>

        <li>
        <AnchorLink offset='20px' href='#contact'>{translations.contact}</AnchorLink>
        </li>
      </NavbarStyle>
    );
};

export default Navbar;
