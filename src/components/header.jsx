import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-family: 'Sacramento', cursive;
  font-size: 3em;
  margin: 0 auto;
  text-align: center;
`;

function Header() {
  return (
    <header>
      <StyledHeader>Grace's Favorite Commercials</StyledHeader>
    </header>
  );
}

export default Header;
