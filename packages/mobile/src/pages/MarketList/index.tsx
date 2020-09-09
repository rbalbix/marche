import React, { Suspense, lazy } from 'react';
import SuspenseLoading from '../../components/SuspenseLoading';

import { Container, TotalItems } from './styles';

const CategoryProducts = lazy(
  () => import('../../components/CategoryProducts')
);

const MarketList: React.FC = () => {
  return (
    <Container>
      <Suspense fallback={<SuspenseLoading />}>
        <TotalItems>45 itens</TotalItems>
        <CategoryProducts />
        <CategoryProducts />
        <CategoryProducts />
      </Suspense>
    </Container>
  );
};

export default MarketList;
