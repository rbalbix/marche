import React, { useState } from 'react';
import { Platform } from 'react-native';

import {
  Container,
  ListItem,
  ProductGroup,
  CheckBoxWrapper,
  CheckBox,
  ProductName,
  TotalItem,
  UnityItem,
  UnityItemText,
  Separator
} from './styles';
import colors from '../../styles/colors';

const MarketListItem: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <ListItem>
        <ProductGroup>
          <CheckBoxWrapper ios={Platform.OS === 'ios'}>
            <CheckBox
              status={checked ? 'checked' : 'unchecked'}
              color={colors.primary}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </CheckBoxWrapper>
          <ProductName>Arroz</ProductName>
        </ProductGroup>
        <TotalItem>1</TotalItem>
      </ListItem>

      <UnityItem>
        <UnityItemText>unidade</UnityItemText>
      </UnityItem>

      <Separator />
    </Container>
  );
};

export default MarketListItem;
