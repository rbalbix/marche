import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';
import colors from '../../styles/colors';

const SuspenseLoading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text>Carregando...</Text>
    </Container>
  );
};

export default SuspenseLoading;
