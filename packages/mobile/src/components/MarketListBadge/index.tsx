import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Card, Header, Body, Title, Date, Badge, TotalItems } from './styles';

interface IProps {
  item: {
    id: string;
    name: string;
    createdAt: string;
    productQuantity: number;
  };
}

const MarketListBadge: React.FC<IProps> = ({ item }: IProps) => {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('MarketList', { listName: item.name });
  }

  return (
    <Card onPress={() => navigateToDetail()} style={{ elevation: 3 }}>
      <Header>
        <Title>{item.name}</Title>
        <Date>
          {format(parseISO(item.createdAt), 'dd/MM/yyyy', {
            locale: ptBR
          })}
        </Date>
      </Header>
      <Body>
        <Badge>
          <TotalItems>{`${item.productQuantity} itens`}</TotalItems>
        </Badge>
      </Body>
    </Card>
  );
};

export default MarketListBadge;
