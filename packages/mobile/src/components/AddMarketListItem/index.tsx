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

interface IProduct {
  id: string;
  name: string;
  unity: string;
}
interface IProps {
  item: IProduct;
  lastItem: boolean;
}

const AddMarketListItem: React.FC<IProps> = ({ item, lastItem }: IProps) => {
  return (
    <Container>
      <ListItem>
        <ProductGroup>
          <ProductName>{item.name}</ProductName>
          <UnityItem>
            <UnityItemText>{item.unity}</UnityItemText>
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
      <Separator lastItem={lastItem} />
    </Container>
  );
};

export default AddMarketListItem;
