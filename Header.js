import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

const Header = ({ title }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text h3 style={{ textAlign: 'center' }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
