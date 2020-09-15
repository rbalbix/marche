import React, { Suspense, lazy } from 'react';

import { Container, CategoryWrapper } from './styles';
import SuspenseLoading from '../../components/SuspenseLoading';

const CategoryHorizontalList = lazy(
  () => import('../../components/CategoryHorizontalList')
);

const AddCategoryProducts = lazy(
  () => import('../../components/AddCategoryProducts')
);

interface IProduct {
  id: string;
  name: string;
  unity: string;
}

interface ICategory {
  id: string;
  name: string;
  products: IProduct[];
}

const CreateList: React.FC = () => {
  const data: ICategory = {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
    name: 'Bebidas',
    products: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
        name: 'Suco de Uva',
        unity: 'unidade'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28af',
        name: 'Cerveja',
        unity: 'unidade'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28cf',
        name: 'Coca-Cola',
        unity: 'unidade - 250ml'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28df',
        name: 'Água com gás',
        unity: '1 litro'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28da',
        name: 'Mate',
        unity: '1 litro'
      }
    ]
  };

  return (
    <Container>
      <Suspense fallback={<SuspenseLoading />}>
        <CategoryHorizontalList />
        <CategoryWrapper>
          <AddCategoryProducts item={data} />
        </CategoryWrapper>
      </Suspense>
    </Container>
  );
};

export default CreateList;
