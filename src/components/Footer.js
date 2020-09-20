import styled from 'styled-components';
import React from 'react';

const FooterStyles = styled.footer`
    width: 100%;
    height: auto;
    background-color: #2d283e;
    color: white;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    flex-direction: column;
    box-shadow: 0px 0 10px  rgba(0,0,0,0.75);

    p{ 
        display: inline-block;
        margin-top: 6px;
        margin-bottom:6px;
        @media screen and (max-width: 600px) {
            margin: 1rem 1rem 0 1rem;
        }
    }
    a{
        color: white;
    }
`

const Footer = () => (
    <FooterStyles>
        <p>Portfolio designed with React </p>
        <p>Email: Andres.pintosantiso@gmail.com</p>

    </FooterStyles>
)

export default Footer;