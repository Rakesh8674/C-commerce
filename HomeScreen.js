import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Header } from '../components/Header';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Welcome to Our Store" />
      <Text style={styles.text}>Discover amazing products!</Text>
      <Button
        title="Browse Products"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 20
  }
});

export default HomeScreen;
