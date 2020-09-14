import React, { Suspense, lazy, useRef } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import SuspenseLoading from '../../components/SuspenseLoading';
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Wrapper, Container, Main, Month } from './styles';

const MarketListBadge = lazy(() => import('../../components/MarketListBadge'));

interface IList {
  id: string;
  name: string;
  createdAt: string;
  productQuantity: number;
}

const Home: React.FC = () => {
  const memoMonth = useRef('');

  const data: IList[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Lista 7',
      createdAt: '2020-08-10',
      productQuantity: 40
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
      name: 'Lista 6',
      createdAt: '2020-08-01',
      productQuantity: 15
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Lista 5',
      createdAt: '2020-07-20',
      productQuantity: 10
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
      name: 'Lista 4',
      createdAt: '2020-07-15',
      productQuantity: 10
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
      name: 'Lista 3',
      createdAt: '2020-07-03',
      productQuantity: 5
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Lista 2',
      createdAt: '2020-06-25',
      productQuantity: 25
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      name: 'Lista 1',
      createdAt: '2020-05-25',
      productQuantity: 45
    }
  ];

  const renderItem: ListRenderItem<IList> = ({ item }) => {
    const currentMonth = format(parseISO(item.createdAt), 'MM');

    const formatedMonth = format(parseISO(item.createdAt), 'MMMM', {
      locale: ptBR
    }).toString();

    if (currentMonth !== memoMonth.current || memoMonth.current === '') {
      memoMonth.current = currentMonth;
      return (
        <>
          <Month>
            {`${formatedMonth.charAt(0).toUpperCase()}${formatedMonth.slice(
              1
            )}`}
          </Month>
          <MarketListBadge item={item} />
        </>
      );
    } else {
      return <MarketListBadge item={item} />;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Main>
          <Suspense fallback={<SuspenseLoading />}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </Suspense>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Home;
