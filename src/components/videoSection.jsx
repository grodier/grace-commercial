import React from 'react';

function VideoSection({title}) {
  return (
    <section>
      <h2>{title}</h2>
      <iframe
        title={title}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/W27bN29GFhs"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}

export default VideoSection;
