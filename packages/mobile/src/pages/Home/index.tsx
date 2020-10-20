import React, { Suspense, lazy, useRef, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '@marche/axios-config';

import { Wrapper, Container, Main, Month } from './styles';

import SuspenseLoading from '../../components/SuspenseLoading';
const MarketListBadge = lazy(() => import('../../components/MarketListBadge'));

interface IList {
  id: string;
  name: string;
  createdAt: string;
  productQuantity: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IList[]>([]);

  useFocusEffect(() => {
    api.get('list').then(response => {
      setData(response.data);
    });
  });

  if (!data) {
    return <SuspenseLoading />;
  }

  const memoMonth = useRef('');

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
