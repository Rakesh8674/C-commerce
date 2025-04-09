import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Header } from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { id: '1', name: 'Product 1', price: 19.99 },
  { id: '2', name: 'Product 2', price: 29.99 },
  { id: '3', name: 'Product 3', price: 39.99 },
];

const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Our Products" />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
      />
      <Button
        title="View Cart"
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

export default ProductsScreen;
