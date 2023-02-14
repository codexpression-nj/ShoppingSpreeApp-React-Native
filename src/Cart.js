//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

// create a component
const Cart = () => {
    const [userCart, setUserCart] = useState([])
    const [products, setProducts] = useState([])
    const [productList, setProductList] = useState([])
    var prods = []

    useEffect(() => {
        loadCart()
    }, []);
    const loadCart = async () => {
        // setProductList([])
        try {
            const response = await fetch('https://fakestoreapi.com/carts/2')
            const json = await response.json();
            console.log(json);
            setProducts(json.products)
            // getProductDetails()
            if (products) {
                products.map(async (prod) => {
                    const responsepr = await fetch('https://fakestoreapi.com/products/' + prod.productId)
                        .then(res => res.json())
                        .then((res) => {
                            prods.push(res)
                            console.log(res);

                        })
                })
                setProductList(prods)


            }


        } catch (error) {
            console.error(error);
        }
    }

    const getProductDetails = async () => {
        let prodList = []
        console.log('userCart');
        console.log(products);
        products.map((prod) => {
            fetch('https://fakestoreapi.com/products/' + prod.productId)
                .then(res => res.json())
                .then((res) => {
                    prods.push(res)
                    console.log(res);

                })
        })

    }
    const renderItem = ({ item }) => <ProductView data={item} />;

    const ProductView = ({ data }) => (

        <View>

            <View>
                <Text>{data.productId}</Text>
                <Text></Text>

            </View>


        </View>
    )
    return (
        <View style={styles.container}>
            {/* <ScrollView> */}

            <FlatList
                data={products}
                renderItem={renderItem}

            />



            {/* </ScrollView> */}
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
