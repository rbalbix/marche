import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../styles/colors';

const cardHeaderFontSize = `${Math.min(hp('3%'), 16)}px`;

export const Card = styled.View`
  width: 100%;
  height: 100px;

  background: ${colors.cardBackground};
  border-radius: 8px;

  margin-bottom: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.cardHeader};

  padding: ${Math.min(hp('2%'), 10)}px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Title = styled.Text`
  color: ${colors.titleText};
  font-family: archivo_500;
  font-size: ${cardHeaderFontSize};
`;

export const Date = styled.Text`
  color: ${colors.text};
  font-family: archivo_500;
  font-size: ${cardHeaderFontSize};
`;

export const Body = styled.View`
  padding: ${Math.min(hp('2%'), 14)}px;
`;

export const Badge = styled.View`
  width: 100px;
  padding: ${Math.min(hp('2%'), 10)}px 0;

  justify-content: center;
  align-items: center;

  background: ${colors.badgeItems};

  border-radius: 4px;
`;

export const Total = styled.Text`
  color: ${colors.badgeText};
  font-family: ubuntu_700;
  font-size: ${Math.min(hp('3%'), 14)}px;
`;
