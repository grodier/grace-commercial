import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {Helmet} from 'react-helmet';

import Header from '../components/header';
import Main from '../components/main';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700|Sacramento');

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #F8F8FF;
    color: #212121;
  }
  h2 {
    border-width: 2px 0 0 2px;
    border-color: #44319b;
    border-style: solid;
    border-radius: 11px 0 0 0;
    padding-left: 3px;
  }
`;

function Hello() {
  return (
    <>
      <Helmet>
        <title>Grace's Favorite Commercials</title>
      </Helmet>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default Hello;
