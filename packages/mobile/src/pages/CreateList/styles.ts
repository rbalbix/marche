import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 10px;
`;

export const CategoryWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  scrollEventThrottle: 200,
  decelerationRate: 'fast'
})`
  margin-bottom: 40px;
`;

export const Empty = styled.Text`
  color: ${colors.primary};
  font-family: archivo_700;
  font-size: ${Math.min(hp('3%'), 24)}px;

  margin: 20px;

  text-align: center;
  line-height: 28px;
  letter-spacing: 0.8px;
`;
