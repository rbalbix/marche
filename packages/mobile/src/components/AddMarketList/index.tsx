import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '@marche/axios-config';
import AsyncStorage from '@react-native-community/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';

const AddMarketList: React.FC = () => {
  const navigation = useNavigation();

  async function handlePress() {
    const response = await api.post('list');
    const { id } = response.data;

    AsyncStorage.setItem('@new-marketList', JSON.stringify({ id }));

    Platform.OS === 'web'
      ? handleNewMarketListClick()
      : navigateToNewMarketList();
  }

  function navigateToNewMarketList() {
    navigation.navigate('CreateMarketList');
  }

  function handleNewMarketListClick() {
    // const response = await api.get('/champ/current');
    // Linking.openURL(response.data.rule_url);
    navigation.navigate('CreateMarketList');
  }

  return (
    <TouchableOpacity onPress={handlePress} style={{ marginRight: 10 }}>
      <MaterialIcons name="add" color={colors.titleText} size={30} />
    </TouchableOpacity>
  );
};

export default AddMarketList;
