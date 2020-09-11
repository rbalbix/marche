import React, { Suspense, lazy } from 'react';

import { Container } from './styles';
import SuspenseLoading from '../../components/SuspenseLoading';

const CategoryHorizontalList = lazy(
  () => import('../../components/CategoryHorizontalList')
);

const AddCategoryProducts = lazy(
  () => import('../../components/AddCategoryProducts')
);

const CreateList: React.FC = () => {
  return (
    <Container>
      <Suspense fallback={<SuspenseLoading />}>
        <CategoryHorizontalList />

        <AddCategoryProducts />
        <AddCategoryProducts />
      </Suspense>
    </Container>
  );
};

export default CreateList;
