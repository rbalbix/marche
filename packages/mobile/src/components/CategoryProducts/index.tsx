import React, { Suspense, lazy } from 'react';

import { Container, CategoryName, CategoryList } from './styles';
import SuspenseLoading from '../SuspenseLoading';

const MarketListItem = lazy(() => import('../MarketListItem'));

interface IProduct {
  id: string;
  name: string;
  unity: string;
  isMarked: boolean;
  productQuantity: number;
}
interface IProps {
  item: {
    id: string;
    name: string;
    products: IProduct[];
  };
}

const CategoryProducts: React.FC<IProps> = ({ item }: IProps) => {
  return (
    <Container>
      <Suspense fallback={<SuspenseLoading />}>
        <CategoryName>{item.name}</CategoryName>
        <CategoryList style={{ elevation: 3 }}>
          {item.products.map(product => (
            <MarketListItem
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

export default CategoryProducts;
