import React from 'react';

import {
  Container,
  ListItem,
  ProductGroup,
  ProductName,
  UnityItem,
  UnityItemText,
  TotalItemGroup,
  PlusButton,
  PlusIcon,
  TotalItem,
  MinusButton,
  MinusIcon,
  Separator
} from './styles';

const AddMarketListItem: React.FC = () => {
  return (
    <Container>
      <ListItem>
        <ProductGroup>
          <ProductName>Feijão</ProductName>
          <UnityItem>
            <UnityItemText>1 kg</UnityItemText>
          </UnityItem>
        </ProductGroup>
        <TotalItemGroup>
          <PlusButton>
            <PlusIcon name="add" size={30} />
          </PlusButton>
          <TotalItem>1</TotalItem>
          <MinusButton>
            <MinusIcon name="remove" size={30} />
          </MinusButton>
        </TotalItemGroup>
      </ListItem>
      <Separator />
    </Container>
  );
};

export default AddMarketListItem;
