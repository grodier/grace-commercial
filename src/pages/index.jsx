import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  font-family: sans-serif;
}`;

function Hello() {
  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Grace's Favorite Commercials</h1>
      </header>
      <main>
        <section id="videoPlayer">
          <h2>Pig Commercial</h2>
          <p>Santander Pig commercial</p>
          <iframe
            title="sanataderpig"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W27bN29GFhs"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>
        <section id="commercialList">
          <h2>Commercials</h2>
          <ul>
            <li>
              <h3>Frankenstein</h3>
              <img
                alt="Santader pig thumbnail"
                src="https://img.youtube.com/vi/W27bN29GFhs/hqdefault.jpg"
              />
              <p>Apple Holiday Frankenstein commercial</p>
            </li>
            <li>
              <h3>Ahoy</h3>
              <img
                alt="Santader pig thumbnail"
                src="https://img.youtube.com/vi/W27bN29GFhs/hqdefault.jpg"
              />
              <p>Bounty Gotcha</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Hello;
