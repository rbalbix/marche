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

export const CheckBoxWrapper = styled.View<IProps>`
  margin-right: 20px;

  ${({ ios }) => {
    return (
      ios &&
      css`
        width: 36px;
        height: 36px;

        border: 1px solid ${colors.primary};
        border-radius: 18px;
        background: transparent;

        justify-content: center;
        align-items: center;
      `
    );
  }}
`;

export const CheckBox = styled(Checkbox)``;

export const ProductName = styled.Text`
  color: ${colors.text};
  font-family: archivo_400;
  font-size: ${Math.min(hp('4%'), 24)}px;
`;

export const TotalItem = styled.Text`
  color: ${colors.text};
  font-family: archivo_400;
  font-size: ${Math.min(hp('4%'), 24)}px;
`;

export const UnityItem = styled.View`
  width: ${Math.min(wp('25%'), 150)}px;

  border: 1px solid ${colors.line};
  border-radius: 4px;

  justify-content: center;
  align-items: center;

  margin-left: 50px;

  padding: 4px;
`;

export const UnityItemText = styled.Text`
  color: ${colors.text};
  font-family: archivo_400;
  font-size: ${Math.min(hp('3%'), 16)}px;
`;

export const Separator = styled(Divider)`
  background: ${colors.line};

  margin: 20px 5px;
`;
