import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  width: 230px;
  height: 230px;
  margin: 10px;
  display: inline-block;
  border-radius: 5%;
  overflow: hidden;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const ListAnchor = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  :hover,
  :focus {
    background-color: #1f1645;
    opacity: 1;
  }
`;

const ListImg = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -180px;
  margin-left: -240px;

  :hover,
  :focus {
    opacity: 0.45;
  }
`;

function CommercialItem({commercial}) {
  return (
    <ListItem>
      <ListAnchor href={commercial.youtubeLink}>
        <ListImg alt={commercial.title} src={commercial.thumbnail} />
      </ListAnchor>
    </ListItem>
  );
}

function CommercialList({commercials}) {
  const commercialItems = commercials.map(commercial => (
    <CommercialItem key={commercial.id} commercial={commercial} />
  ));

  return (
    <section>
      <h2>Commercials</h2>
      <ul>{commercialItems}</ul>
    </section>
  );
}

export default CommercialList;
