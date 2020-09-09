import React, { Suspense, lazy } from 'react';
import SuspenseLoading from '../../components/SuspenseLoading';

import { Wrapper, Container, Main, Month } from './styles';

const MarketListBadge = lazy(() => import('../../components/MarketListBadge'));

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Main>
          <Suspense fallback={<SuspenseLoading />}>
            <Month>Agosto</Month>
            <MarketListBadge />
            <MarketListBadge />
            <Month>Julho</Month>
            <MarketListBadge />
            <MarketListBadge />
            <MarketListBadge />
            <Month>Junho</Month>
            <MarketListBadge />
            <MarketListBadge />
            <MarketListBadge />
          </Suspense>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Home;
