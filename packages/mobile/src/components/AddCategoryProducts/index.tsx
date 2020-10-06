import React, { Suspense, lazy, useEffect } from 'react';

import api from '@marche/axios-config';
import useFetch from '@marche/swr-config';
import AsyncStorage from '@react-native-community/async-storage';

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
  const { data } = useFetch(`/product/category/${item.id}`);

  async function saveMarketList(marketList: any) {
    await api.post('marketList', marketList);
  }

  useEffect(() => {
    return () => {
      async function saveAndExit() {
        const marketList = await AsyncStorage.getItem('@new-marketList');
        if (marketList) {
          await saveMarketList(JSON.parse(marketList));
        }

        await AsyncStorage.removeItem('@new-marketList');
      }

      saveAndExit();
    };
  }, []);

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
