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
