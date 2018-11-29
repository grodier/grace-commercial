import React from 'react';
import sytled from 'styled-components';

const VidFrame = sytled.iframe`
display: block;
width: 853px;
margin: 0 auto;
`;

function VideoSection({commercial}) {
  return (
    <section>
      <h2>{commercial.title}</h2>
      <VidFrame
        title={commercial.title}
        width="853"
        height="505"
        src={`https://www.youtube.com/embed/${commercial.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}

export default VideoSection;
