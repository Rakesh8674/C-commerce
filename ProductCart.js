import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Icon } from 'react-native-elements';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <Card.Title>{product.name}</Card.Title>
      <Card.Divider />
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Button
        icon={<Icon name="shopping-cart" color="#ffffff" />}
        buttonStyle={styles.button}
        title="Add to Cart"
        onPress={() => addToCart(product)}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }
});

export default ProductCard;
