import React from 'react';
import VideoSection from './videoSection';
import CommercialList from './commercialList';

function Main() {
  const commercials = [
    {
      id: 'V3qtndbZh3s',
      title: 'Ahoy',
      thumbnail: 'https://img.youtube.com/vi/V3qtndbZh3s/hqdefault.jpg',
      youtubeLink: 'https://youtube.com',
    },
    {
      id: 'K1kl7qJDmw4',
      title: 'Frankenstien',
      thumbnail: 'https://img.youtube.com/vi/K1kl7qJDmw4/hqdefault.jpg',
      youtubeLink: 'https://youtube.com',
    },
    {
      id: 'W27bN29GFhs',
      title: 'Enterprise Laugh',
      thumbnail: 'https://img.youtube.com/vi/W27bN29GFhs/hqdefault.jpg',
      youtubeLink: 'https://youtube.com',
    },
    {
      id: 'W27bN29GFhs',
      title: 'Santander Pig',
      thumbnail: 'https://img.youtube.com/vi/W27bN29GFhs/hqdefault.jpg',
      youtubeLink: 'https://youtube.com',
    },
  ];

  return (
    <main>
      <VideoSection title="PigCommercial" />
      <CommercialList commercials={commercials} />
    </main>
  );
}

export default Main;
