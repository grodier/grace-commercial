import React from 'react';
import styled from 'styled-components';

// The following div and ifrome styles are a way to incorporate
// a responsive video. Technique to do this taken from:
// https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
const VidFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VidWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
`;

function VideoSection({commercial}) {
  return (
    <section>
      <h2>{commercial.title}</h2>
      <VidWrapper>
        <VidFrame
          title={commercial.title}
          width="853"
          height="505"
          src={`https://www.youtube.com/embed/${commercial.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VidWrapper>
    </section>
  );
}

export default VideoSection;
