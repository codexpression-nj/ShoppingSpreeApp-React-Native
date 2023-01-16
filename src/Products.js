//import liraries
import React, { Component } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const prods = [

]
// create a component
const Products = ( {route, navigation }) => {
    const { categoryName } = route.params;
    const [prodItems, setProdItems] = useState({});

    console.log(categoryName);
    const loadProductItems = async () => {
        await fetch('https://fakestoreapi.com/products/category/'+categoryName)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                setProdItems(res)
            })
    }

    useEffect(() => {
        loadProductItems()
    }, []);
    return (
        <View style={styles.container}>
            <Text>Products</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Products;
