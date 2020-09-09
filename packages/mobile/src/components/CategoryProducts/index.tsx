import React, { Suspense, lazy } from 'react';

import { Container, CategoryName, CategoryList } from './styles';
import SuspenseLoading from '../SuspenseLoading';

const MarketListItem = lazy(() => import('../MarketListItem'));

const CategoryProducts: React.FC = () => {
  return (
    <Container>
      <Suspense fallback={<SuspenseLoading />}>
        <CategoryName>Alimentos</CategoryName>
        <CategoryList style={{ elevation: 3 }}>
          <MarketListItem />
          <MarketListItem />
        </CategoryList>
      </Suspense>
    </Container>
  );
};

export default CategoryProducts;
