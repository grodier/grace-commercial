import React from 'react';
import {createGlobalStyle} from 'styled-components';

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
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default Hello;
