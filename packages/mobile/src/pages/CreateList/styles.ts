import styled from 'styled-components/native';

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
