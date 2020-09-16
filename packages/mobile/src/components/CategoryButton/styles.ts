import styled from 'styled-components/native';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const Container = styled.View``;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  color: ${colors.text};
  font-family: archivo_400;
  font-size: ${Math.min(hp('4%'), 24)}px;

  margin: 0 5px;
  padding: 0 0 8px 0;
`;
