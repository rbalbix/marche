import React, { Suspense, lazy } from 'react';

import { Container, CategoryName, CategoryList } from './styles';
import SuspenseLoading from '../SuspenseLoading';

const AddMarketListItem = lazy(() => import('../AddMarketListItem'));

const AddCategoryProducts: React.FC = () => {
  return (
    <Container>
      <Suspense fallback={<SuspenseLoading />}>
        <CategoryName>Alimentos</CategoryName>
        <CategoryList style={{ elevation: 3 }}>
          <AddMarketListItem />
          <AddMarketListItem />
          <AddMarketListItem />
        </CategoryList>
      </Suspense>
    </Container>
  );
};

export default AddCategoryProducts;
