import React, { useState } from 'react';

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
  const [quantity, setQuantity] = useState(0);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  }

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
          <PlusButton onPress={increaseQuantity}>
            <PlusIcon name="add" size={50} />
          </PlusButton>
          <TotalItem>{quantity}</TotalItem>
          <MinusButton onPress={decreaseQuantity}>
            <MinusIcon name="remove" size={30} />
          </MinusButton>
        </TotalItemGroup>
      </ListItem>
      <Separator lastItem={lastItem} />
    </Container>
  );
};

export default AddMarketListItem;
