//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import img2 from '../assets/brd.jpeg';
import { AntDesign } from '@expo/vector-icons';
import Loader from './Loader';

const Category = ({ data, navigation }) => (

    <TouchableOpacity style={{ marginBottom: 16, borderRadius: 16, height: 160, }} onPress={() => navigation.navigate('products', {
        categoryName: data
    })}>
        {data == 'jewelery' ? (
            <ImageBackground 
                source={require('../assets/jewelery.png')} 
                resizeMode="cover" 
                style={styles.image} 
                imageStyle={{ borderRadius: 16, opacity: 0.4 }}>
                <Text style={styles.title}>{data}</Text>
            </ImageBackground>

        )
            : data == "women's clothing" ? (
                <ImageBackground source={require("../assets/womenclothing.png")} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 16, opacity: 0.4 }}>
                    <Text style={styles.title}>{data}</Text>
                </ImageBackground>
            )
                : data == "men's clothing" ? (
                    <ImageBackground source={require("../assets/mensclothing.png")} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 16, opacity: 0.4 }}>
                        <Text style={styles.title}>{data}</Text>
                    </ImageBackground>
                )
                    : data == "electronics" ? (
                        <ImageBackground source={require("../assets/electronics.png")} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 16, opacity: 0.4 }} >
                            <Text style={styles.title}>{data}</Text>
                        </ImageBackground>
                    )
                        : (
                            <>
                                <Loader />
                            </>
                        )
        }



    </TouchableOpacity>
);



const Categories = ({ navigation }) => {
    // const renderItem = ({ item }) => <Item data={item} />;
    const [categories, setcategories] = useState({});


    const renderItem = ({ item }) => <Category data={item} navigation={navigation} />;

    useEffect(() => {
        loadData()
    }, []);

    const loadData = async () => {
        await fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then((res) => {
                // console.log(res);
                setcategories(res)
            })
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>



        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,

        backgroundColor: 'white',
    },
    image: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 16,
        display: 'flex',
        width: '100%',
        // height:100,
        paddingBottom: 100,

    },
    title: {
        fontWeight: '200',
        fontSize: 30,
        padding: 10,
        color: 'white',
        textTransform: 'capitalize',
        // textAlign :'right'
        position: 'absolute',
        bottom: 0,
        left: 0,


    },
 

    cardView: {


    },
    
    

});

//make this component available to the app
export default Categories;
