import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';

const AddMarketList: React.FC = () => {
  const navigation = useNavigation();

  function navigateToNewMarketList() {
    navigation.navigate('CreateMarketList');
  }

  async function handleNewMarketListClick() {
    // const response = await api.get('/champ/current');
    // Linking.openURL(response.data.rule_url);
    navigation.navigate('CreateMarketList');
  }

  return (
    <TouchableOpacity
      onPress={() => {
        Platform.OS === 'web'
          ? handleNewMarketListClick()
          : navigateToNewMarketList();
      }}
      style={{ marginRight: 10 }}
    >
      <MaterialIcons name="add" color={colors.titleText} size={30} />
    </TouchableOpacity>
  );
};

export default AddMarketList;
