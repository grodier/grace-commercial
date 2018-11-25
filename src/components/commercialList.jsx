import React from 'react';
import styled from 'styled-components';

const ListTitle = styled.h3`
  position: relative;
  margin: 0 auto;
  top: 50%;
  color: white;
  visibility: hidden;
  text-align: center;
`;

const ListImg = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -180px;
  margin-left: -240px;
`;

const ListAnchor = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  :visited,
  :link,
  :active {
    text-decoration: none;
  }

  :hover,
  :focus {
    background-color: #1f1645;
    opacity: 1;
  }

  :hover ${ListTitle}, :focus ${ListTitle} {
    visibility: visible;
    opacity: 1;
  }

  :hover ${ListImg}, :focus ${ListImg} {
    opacity: 0.2;
  }
`;

const ListItem = styled.li`
  width: 230px;
  height: 230px;
  margin: 10px;
  display: inline-block;
  border-radius: 5%;
  overflow: hidden;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

function CommercialItem({commercial}) {
  return (
    <ListItem>
      <ListAnchor href={commercial.youtubeLink}>
        <ListImg alt={commercial.title} src={commercial.thumbnail} />
        <ListTitle>{commercial.title}</ListTitle>
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
