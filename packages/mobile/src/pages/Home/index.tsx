import React from 'react';

import MarketList from '../../components/MarketList';

import { Wrapper, Container, Main } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Main>
          <MarketList />
          <MarketList />
          <MarketList />
          <MarketList />
          <MarketList />
          <MarketList />
          <MarketList />
          <MarketList />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Home;
