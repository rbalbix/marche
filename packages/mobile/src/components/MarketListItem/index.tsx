import React, { useState } from 'react';
import { Platform } from 'react-native';

import api from '@marche/axios-config';

import {
  Container,
  ListItem,
  ProductGroup,
  CheckBox,
  ProductName,
  TotalItem,
  UnityItem,
  UnityItemText,
  Separator
} from './styles';
import colors from '../../styles/colors';

interface IProduct {
  id: string;
  name: string;
  unity: string;
  productQuantity: number;
  isMarked: boolean;
  marketListId: string;
}
interface IProps {
  item: IProduct;
  lastItem: boolean;
}

const MarketListItem: React.FC<IProps> = ({ item, lastItem }: IProps) => {
  const [checked, setChecked] = useState(item.isMarked);

  async function handleSubmit() {
    await api.put(`marketList/${item.marketListId}`, {
      isMarked: !checked
    });
  }

  function handlePress() {
    handleSubmit();
    setChecked(!checked);
  }

  return (
    <Container>
      <ListItem>
        <ProductGroup>
          <CheckBox
            status={checked ? 'checked' : 'unchecked'}
            color={colors.primary}
            onPress={handlePress}
            label=""
            ios={Platform.OS === 'ios'}
          />
          <ProductName>{item.name}</ProductName>
        </ProductGroup>
        <TotalItem>{item.productQuantity}</TotalItem>
      </ListItem>

      <UnityItem>
        <UnityItemText>{item.unity}</UnityItemText>
      </UnityItem>

      <Separator lastItem={lastItem} />
    </Container>
  );
};

export default MarketListItem;
