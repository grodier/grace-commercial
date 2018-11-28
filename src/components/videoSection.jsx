import React from 'react';

function VideoSection({commercial}) {
  return (
    <section>
      <h2>{commercial.title}</h2>
      <iframe
        title={commercial.title}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${commercial.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}

export default VideoSection;
