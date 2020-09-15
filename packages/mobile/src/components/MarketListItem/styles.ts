import styled, { css } from 'styled-components/native';
import { Checkbox, Divider } from 'react-native-paper';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const Container = styled.View``;

export const ListItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface IProps {
  ios: boolean;
}

export const ProductGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckBox = styled(Checkbox.Item)<IProps>`
  padding: 0;
  margin-right: 0;

  border-radius: 8px;

  ${({ ios }) => {
    return (
      ios &&
      css`
        border: 1px solid ${colors.primary};
      `
    );
  }}
`;

export const ProductName = styled.Text`
  color: ${colors.text};
  font-family: archivo_400;
  font-size: ${Math.min(hp('4%'), 24)}px;

  margin-left: 15px;
`;

export const TotalItem = styled.Text`
  color: ${colors.text};
  font-family: archivo_400;
  font-size: ${Math.min(hp('4%'), 24)}px;

  margin-right: 5px;
`;

export const UnityItem = styled.View`
  align-items: flex-start;

  margin-left: 50px;
`;

export const UnityItemText = styled.Text`
  color: ${colors.text};
  font-family: archivo_700;
  font-size: ${Math.min(hp('3%'), 16)}px;

  border: 1px solid ${colors.line};
  border-radius: 4px;

  padding: 2px 8px;
`;

interface ISeparatorProps {
  lastItem: boolean;
}

export const Separator = styled(Divider)<ISeparatorProps>`
  background: ${colors.line};
  margin: 20px 5px;

  ${({ lastItem }) => {
    return (
      lastItem &&
      css`
        background: ${colors.cardBackground};
        margin: 20px 0 10px;
      `
    );
  }}
`;
