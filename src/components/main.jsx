import React from 'react';
import VideoSection from './videoSection';

function Main() {
  return (
    <main>
      <VideoSection title="PigCommercial" />
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
  );
}

export default Main;
