import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layouts/Header";
import {  useSelector } from "react-redux";
import Skills from "./components/Skills";
import ContactMe from "./components/Contact";
import AboutMe from "./components/About";
import styled from "styled-components";
import Axios from "axios";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const Content = styled.body`
`;

function App() {
  const { language } = useSelector((props) => props.language);
  const [translations, setTranslations] = useState();

  useEffect(() => {
    Axios.get("/translations/en.json").then((response) => {
      setTranslations(response.data[language]);
    });
  }, [language]);

  if (!translations) {
    return <Spinner></Spinner>;
  }else{
    return (
        <Router>
          <Header translations={translations.navbar} />
          <Content>
              <AboutMe translations={translations.aboutMe}/>
              <Skills translations={translations.skills}/>
              <Projects translations={translations.projects}/>
              <ContactMe translations={translations.contactMe}/>
              <Footer></Footer>
          </Content>
        </Router>
    );

  }

}

export default App;
