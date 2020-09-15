import styled, { css } from 'styled-components/native';
import { Divider } from 'react-native-paper';

import { MaterialIcons } from '@expo/vector-icons';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
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

export const ProductGroup = styled.View``;

export const ProductName = styled.Text`
  color: ${colors.text};
  font-family: archivo_400;
  font-size: ${Math.min(hp('4%'), 24)}px;
`;

export const UnityItem = styled.View`
  align-items: flex-start;

  margin-top: 10px;
`;

export const UnityItemText = styled.Text`
  color: ${colors.text};
  font-family: archivo_700;
  font-size: ${Math.min(hp('3%'), 16)}px;

  border: 1px solid ${colors.line};
  border-radius: 4px;

  padding: 4px 8px;
`;

export const TotalItemGroup = styled.View`
  align-items: center;

  border-left-width: 0.5px;
  border-left-color: ${colors.line};

  padding: 0 10px 0 20px;
`;

export const PlusButton = styled.TouchableOpacity``;

const Icons = styled(MaterialIcons)`
  color: ${colors.primary};
  font-size: ${Math.min(hp('5%'), 30)}px;
`;

export const PlusIcon = styled(Icons)``;

export const TotalItem = styled.Text`
  color: ${colors.text};
  font-family: archivo_400;
  font-size: ${Math.min(hp('4%'), 24)}px;

  margin: 10px 0;
`;

export const MinusButton = styled.TouchableOpacity``;

export const MinusIcon = styled(Icons)``;

// export const Separator = styled(Divider)`
//   background: ${colors.line};

//   margin: 20px 5px;
// `;

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
        margin: 20px 0 5px;
      `
    );
  }}
`;
