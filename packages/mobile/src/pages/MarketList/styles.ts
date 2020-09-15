import styled from 'styled-components/native';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  padding: 10px;
`;

export const TotalItems = styled.Text`
  color: ${colors.text};
  font-family: archivo_700;
  font-size: ${Math.min(hp('3%'), 24)}px;

  align-self: flex-end;

  margin-bottom: 16px;
`;
