import React from 'react';

function Hello() {
  return (
    <>
      <header>
        <h1>Grace's Favorite Commercials</h1>
      </header>
      <main>
        <section id="videoPlayer">
          <h2>Pig Commercial</h2>
          <p>Santander Pig commercial</p>
        </section>
        <section id="commercialList">
          <h2>Commercials</h2>
          <ul>
            <li>
              <h3>Frankenstein</h3>
              <p>Apple Holiday Frankenstein commercial</p>
            </li>
            <li>
              <h3>Ahoy</h3>
              <p>Bounty Gotcha</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Hello;
