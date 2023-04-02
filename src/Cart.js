//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { AsyncStorage } from 'react-native';

// create a component
const Cart = () => {
    const [userCart, setUserCart] = useState([])
    const [products, setProducts] = useState([{}])
    const [productList, setProductList] = useState([])
    // const [cartItems, setCartItems] = useState([])
    var prods = []
    var cartItems = []

    useEffect(() => {
        retrieveData = async () => {
            try {
              const value = await AsyncStorage.getItem('cartNumber');
              if (value !== null) {
                // We have data!!
                console.log(value);
                cartItems = value
                setProducts(value)

              }else{
                console.log("before");
              }
            } catch (error) {
              // Error retrieving data
              console.log(error);
            }
          }
        retrieveData()
        console.log(products);
   
    }, []);
   
    const renderItem = ({ item }) => (
        <Text>{`Product ID: ${item.productId}, Quantity: ${item.quantity}`}</Text>
      );
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Cart;
