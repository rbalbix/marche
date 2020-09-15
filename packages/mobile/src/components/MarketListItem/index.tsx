import React, { useState } from 'react';
import { Platform } from 'react-native';

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
  isMarked: boolean;
  productQuantity: number;
}
interface IProps {
  item: IProduct;
  lastItem: boolean;
}

const MarketListItem: React.FC<IProps> = ({ item, lastItem }: IProps) => {
  const [checked, setChecked] = useState(item.isMarked);

  function handlePress() {
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
