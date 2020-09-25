import React, { Suspense, lazy } from 'react';
import useFetch from '@marche/swr-config';

import { Container, CategoryName, CategoryList, Empty } from './styles';
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
}

interface IProps {
  item: ICategory;
}

const AddCategoryProducts: React.FC<IProps> = ({ item }: IProps) => {
  console.log(item.id === '');
  const { data } = useFetch(`/product/category/${item.id}`);

  if (item.id !== '' && !data) {
    return <SuspenseLoading />;
  }

  return (
    <Container>
      {item.id === '' || data.length === 0 ? (
        <Empty>
          Não há produtos nesta categoria. Selecione uma categoria para ver a
          lista de produtos.
        </Empty>
      ) : (
        <Suspense fallback={<SuspenseLoading />}>
          <CategoryName>{item.name}</CategoryName>
          <CategoryList style={{ elevation: 3 }}>
            {data.map((product: IProduct) => (
              <AddMarketListItem
                key={product.id}
                item={product}
                lastItem={data[data.length - 1].id === product.id}
              />
            ))}
          </CategoryList>
        </Suspense>
      )}
    </Container>
  );
};

export default AddCategoryProducts;
