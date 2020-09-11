import styled from 'styled-components/native';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const Container = styled.View``;

export const CategoryName = styled.Text`
  color: ${colors.text};
  font-family: archivo_500;
  font-size: ${Math.min(hp('3%'), 24)}px;
`;

export const CategoryList = styled.View`
  width: 100%;

  background-color: ${colors.cardBackground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 20px 15px 0 15px;
  margin: 10px 0 20px 0;
  border-radius: 8px;
`;
