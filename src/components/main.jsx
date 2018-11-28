import React from 'react';
import VideoSection from './videoSection';
import CommercialList from './commercialList';

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
    id: 'rYzCJ24qJj4',
    title: "Enterprise: We've Got It Covered",
    thumbnail: 'https://img.youtube.com/vi/rYzCJ24qJj4/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
  {
    id: 'W27bN29GFhs',
    title: 'Santander Pig',
    thumbnail: 'https://img.youtube.com/vi/W27bN29GFhs/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
  {
    id: 'Om3MeiTtLfo',
    title: 'Progressive: Cycling Is My Passion',
    thumbnail: 'https://img.youtube.com/vi/Om3MeiTtLfo/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
  {
    id: 'rdJcRGo5TwY',
    title: 'Eli and OBJ',
    thumbnail: 'https://img.youtube.com/vi/rdJcRGo5TwY/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
  {
    id: 'XLpDiIVX0Wo',
    title: 'Extra Gum Falling in Love',
    thumbnail: 'https://img.youtube.com/vi/XLpDiIVX0Wo/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
  {
    id: 'D8Cb5Wk2t-8',
    title: 'Dilly Dilly',
    thumbnail: 'https://img.youtube.com/vi/D8Cb5Wk2t-8/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCommerical: {
        id: 'V3qtndbZh3s',
        title: 'Ahoy',
        thumbnail: 'https://img.youtube.com/vi/V3qtndbZh3s/hqdefault.jpg',
        youtubeLink: 'https://youtube.com',
      },
    };
  }

  selectCommerical(commercial) {
    this.setState({
      selectedCommerical: commercial,
    });
  }

  render() {
    const {selectedCommerical} = this.state;
    return (
      <main>
        <VideoSection commercial={selectedCommerical} />
        <CommercialList
          commercials={commercials}
          selectCommercial={commercial => this.selectCommerical(commercial)}
        />
      </main>
    );
  }
}

export default Main;
