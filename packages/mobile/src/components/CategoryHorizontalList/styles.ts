import styled from 'styled-components/native';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  scrollEventThrottle: 200,
  decelerationRate: 'fast'
})`
  padding: 5px;
  margin-bottom: 20px;
`;

export const CategoryButton = styled.TouchableOpacity``;

export const CategoryButtonText = styled.Text`
  color: ${colors.text};
  font-family: archivo_400;
  font-size: ${Math.min(hp('4%'), 24)}px;

  margin: 0 10px;
`;
