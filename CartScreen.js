import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Header } from '../components/Header';
import { CartContext } from '../contexts/CartContext';
import { Card, Icon } from 'react-native-elements';

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
            <Icon name="remove" size={20} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
            <Icon name="add" size={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Icon name="delete" color="#ff0000" />
        </TouchableOpacity>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Header title="Your Cart" />
      {cartItems.length === 0 ? (
        <>
          <Text style={styles.text}>Your cart is empty</Text>
          <Button
            title="Continue Shopping"
            onPress={() => navigation.navigate('Products')}
          />
        </>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.list}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${cartTotal.toFixed(2)}</Text>
            <Button
              title="Continue Shopping"
              onPress={() => navigation.navigate('Products')}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  text: {
    fontSize: 18,
    marginBottom: 20
  },
  list: {
    paddingBottom: 100
  },
  card: {
    marginBottom: 10,
    padding: 15
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemName: {
    fontSize: 16,
    flex: 2
  },
  itemPrice: {
    fontSize: 16,
    flex: 1,
    textAlign: 'right'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16
  },
  totalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  }
});

export default CartScreen;
