import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Card, Header, Body, Title, Date, Badge, TotalItems } from './styles';

const MarketListBadge: React.FC = () => {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('MarketList', { listName: 'Lista xxx' });
  }

  return (
    <Card onPress={() => navigateToDetail()} style={{ elevation: 3 }}>
      <Header>
        <Title>Lista 1</Title>
        <Date>08/08/2020</Date>
      </Header>
      <Body>
        <Badge>
          <TotalItems>45 itens</TotalItems>
        </Badge>
      </Body>
    </Card>
  );
};

export default MarketListBadge;
