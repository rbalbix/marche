import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.background};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
`;

export const Container = styled.View`
  padding: ${Math.min(hp('2%'), 10)}px;
`;

export const Main = styled.View``;

export const Month = styled.Text`
  color: ${colors.text};
  font-family: archivo_500;
  font-size: ${Math.min(hp('3%'), 18)}px;

  padding: 0 0 5px 5px;
`;
