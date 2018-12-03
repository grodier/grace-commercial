import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {Helmet} from 'react-helmet';

import Header from '../components/header';
import Main from '../components/main';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: sans-serif;
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
