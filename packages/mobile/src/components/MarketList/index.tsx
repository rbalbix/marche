import React from 'react';

import { Card, Header, Body, Title, Date, Badge, Total } from './styles';

const MarketList: React.FC = () => {
  return (
    <Card>
      <Header>
        <Title>Lista 1</Title>
        <Date>08/08/2020</Date>
      </Header>
      <Body>
        <Badge>
          <Total>45 itens</Total>
        </Badge>
      </Body>
    </Card>
  );
};

export default MarketList;
