import React, { Suspense, lazy } from 'react';

import { Container, CategoryName, CategoryList } from './styles';
import SuspenseLoading from '../SuspenseLoading';

const AddMarketListItem = lazy(() => import('../AddMarketListItem'));

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

interface IProps {
  item: ICategory;
}

const AddCategoryProducts: React.FC<IProps> = ({ item }: IProps) => {
  return (
    <Container>
      <Suspense fallback={<SuspenseLoading />}>
        <CategoryName>{item.name}</CategoryName>
        <CategoryList style={{ elevation: 3 }}>
          {item.products.map(product => (
            <AddMarketListItem
              key={product.id}
              item={product}
              lastItem={
                item.products[item.products.length - 1].id === product.id
              }
            />
          ))}
        </CategoryList>
      </Suspense>
    </Container>
  );
};

export default AddCategoryProducts;
