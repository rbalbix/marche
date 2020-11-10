import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import api from '@marche/axios-config';
import SuspenseLoading from '../../components/SuspenseLoading';

import { Container, TotalItems } from './styles';

const CategoryProducts = lazy(
  () => import('../../components/CategoryProducts')
);

interface IListResult {
  marketId: string;
  quantity: number;
  isMarked: number;
  productId: string;
  productName: string;
  unity: string;
  categoryId: string;
  categoryName: string;
  listId: string;
  listName: string;
  productQuantity: number;
}
interface ICategory {
  id: string;
  name: string;
  products: IProduct[];
}
interface IProduct {
  id: string;
  name: string;
  unity: string;
  isMarked: boolean;
  productQuantity: number;
}
interface IMarketList {
  id: string;
  name: string;
  // createdAt: string;
  productQuantity: number;
  categories: ICategory[];
}

interface MarketListDetailsRouteParams {
  id: string;
}

const MarketList: React.FC = () => {
  const route = useRoute();
  const [data, setData] = useState<IMarketList>();

  const params = route.params as MarketListDetailsRouteParams;

  function getMountedMarketList(data: IListResult[]) {
    const categories: Array<ICategory> = [];
    let category = '';

    data.map((marketItem: IListResult) => {
      if (category !== marketItem.categoryName) {
        category = marketItem.categoryName;
        categories.push({
          id: marketItem.categoryId,
          name: marketItem.categoryName,
          products: Array<IProduct>()
        });
      }

      categories
        .find(category => category.name === marketItem.categoryName)
        ?.products.push({
          id: marketItem.productId,
          name: marketItem.productName,
          unity: marketItem.unity,
          isMarked: marketItem.isMarked === 1,
          productQuantity: marketItem.quantity
        });
    });

    const marketList: IMarketList = {
      id: data[0].listId,
      name: data[0].listName,
      // createdAt: '2020-08-10',
      productQuantity: data[0].productQuantity,
      categories
    };

    return marketList;
  }

  useEffect(() => {
    api.get(`list/${params.id}`).then(response => {
      setData(getMountedMarketList(response.data));
    });
  }, []);

  if (!data) {
    return <SuspenseLoading />;
  }

  return (
    <Container>
      <Suspense fallback={<SuspenseLoading />}>
        <TotalItems>{`${data.productQuantity} ${
          data.productQuantity > 1 ? 'itens' : 'item'
        }
        `}</TotalItems>

        {data.categories.map(category => (
          <CategoryProducts key={category.id} item={category} />
        ))}
      </Suspense>
    </Container>
  );
};

export default MarketList;
