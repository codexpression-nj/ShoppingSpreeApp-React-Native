//import liraries
import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, Image, Platform, Pressable, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SharedElement } from 'react-native-shared-element';
import Loader from './Loader';
import { AntDesign } from '@expo/vector-icons';


// create a component
const Products = ({ route, navigation }) => {
    const { categoryName } = route.params;
    const [prodItems, setProdItems] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadProductItems()
    }, []);
    const loadProductItems = async () => {

        await fetch('https://fakestoreapi.com/products/category/' + categoryName)
            .then(res => res.json())
            .then((res) => {
                // console.log(res);
                setProdItems(res)
                setLoading(false)
            })
    }
   
    

    useEffect(() => {
        loadProductItems()
    }, []);
    return (
        <SafeAreaView style={{flex:1}}>
            {/* <TouchableOpacity style={{ margin: 16, borderRadius: 16, height: 80, }} onPress={() => { }}>
                <ImageBackground
                    source={require('../assets/jewelery.png')}
                    resizeMode="cover"
                    style={styles.headerImage}
                    imageStyle={{ borderRadius: 16, opacity: 0.4 }}>
                    <Text style={styles.headerTitle}>{categoryName}</Text>
                </ImageBackground>
            </TouchableOpacity> */}
            {!loading ?
                <View style={styles.container}>
                    <FlatList
                        data={prodItems}
                        numColumns={2}
                        horizontal={false}
                        key={2}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('productDetails', { item }) }}
                                    style={styles.item} >
                                    <SharedElement id={`item.${item.key}.image`}>
                                        <View style={styles.imageContainer}>
                                            <Image source={{ uri: item.image }} key={index} style={styles.image} />
                                        </View>
                                    </SharedElement>

                                    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: 160, alignItems: 'center' }}>
                                        <Text style={{ marginBottom: 5, marginTop: 5, fontWeight: '600' }}>
                                            <Text style={{ fontWeight: '300' }}>R </Text>
                                            {item.price}
                                        </Text>
                                        <TouchableOpacity>
                                        <AntDesign name="hearto" size={16} color="black" />
                                            {/* <Ionicons name="md-heart-outline" size={16} color="black" /> */}
                                        </TouchableOpacity>
                                    </View>

                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>

                : <Loader />
            }

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        flex: 1
    },
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 120,
        height: 130,
        resizeMode: 'center',
        alignItems: 'center',

    },
    title: {
        width: 160,
        height: 50,
        fontWeight: '300',
        marginBottom: 6,
        fontSize: 12
    },
    imageContainer: {
        backgroundColor: 'white',
        width: 170,
        height: 200,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 16

    },
    item: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    headerImage: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 16,
        display: 'flex',
        width: '100%',
        // height:100,
        paddingBottom: 100,
        justifyContent: 'flex-start'
    },
    headerTitle: {
        fontWeight: '200',
        fontSize: 30,
        padding: 10,
        color: 'white',
        textTransform: 'capitalize',
        // textAlign :'right'
        position: 'absolute',
        bottom: 0,
        left: 0,
    }
});


//make this component available to the app
export default Products;
