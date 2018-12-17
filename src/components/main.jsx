import React from 'react';
import styled from 'styled-components';
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
  {
    id: 'RceKoQQlf_o',
    title: 'Pixel 3 Top Shot',
    thumbnail: 'https://img.youtube.com/vi/RceKoQQlf_o/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
  {
    id: 'NLTKvGgTb10',
    title: 'Progressive: Future Son',
    thumbnail: 'https://img.youtube.com/vi/NLTKvGgTb10/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
  {
    id: 'KsBWwj3uKZ0',
    title: 'GEICO: Alexander Graham Bell',
    thumbnail: 'https://img.youtube.com/vi/KsBWwj3uKZ0/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
  {
    id: 'CH9yvMGeHfo',
    title: 'Washington Crossing the Delaware',
    thumbnail: 'https://img.youtube.com/vi/CH9yvMGeHfo/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
  {
    id: 'X2cs8gnb42A',
    title: 'The Tide Stain',
    thumbnail: 'https://img.youtube.com/vi/X2cs8gnb42A/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
  {
    id: 'bwz9X6ejuiQ',
    title: 'McGruff Fights Baby Talk',
    thumbnail: 'https://img.youtube.com/vi/bwz9X6ejuiQ/hqdefault.jpg',
    youtubeLink: 'https://youtube.com',
  },
];

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.elementRef = React.createRef();
    this.videoRef = React.createRef();

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

  scrollToComponent() {
    this.elementRef.current.scrollIntoView({
      behavior: 'smooth',
    });
    this.elementRef.current.focus();
  }

  render() {
    const {selectedCommerical} = this.state;
    return (
      <MainContent>
        <VideoSection ref={this.elementRef} commercial={selectedCommerical} />
        <CommercialList
          commercials={commercials}
          selectCommercial={commercial => this.selectCommerical(commercial)}
          scrollToVideo={() => this.scrollToComponent()}
        />
      </MainContent>
    );
  }
}

export default Main;
