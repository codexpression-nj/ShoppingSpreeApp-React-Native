//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import img2 from '../assets/brd.jpeg';
import { AntDesign } from '@expo/vector-icons';




// const categoryList = {}


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];





const Category = ({ data, navigation }) => (
    <TouchableOpacity style={{ marginBottom: 16, borderRadius: 16, height: 180, }} onPress={() => navigation.navigate('cate', {
        categoryName: data
    })}>

        <ImageBackground source={require('../assets/' + data + '.png')} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 16, opacity: 0.5 }}
        >
            <Text style={styles.title}>{data}</Text>
        </ImageBackground>
      

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
                console.log(res);
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
        fontWeight: '500',
        fontSize: 24,
        padding: 10,
        color: 'white',
        textTransform: 'capitalize',
        // textAlign :'right'
        position: 'absolute',
        bottom: 0,
        left: 0,

    },
    categoryName: {
        fontSize: 11,
        opacity: 0.7
    },
    bg: {

    },

    cardView: {


    },
    inputNumber: {
        width: 85,
        height: 30,
        borderRadius: 12,
        backgroundColor: '#33517B',
        display: 'flex', flexDirection: 'row',
        alignItems: 'center',
        // alignContent: 'center',
        justifyContent: 'space-evenly',
        padding: '4px',
    },
    img: {
        // width: 85,
        // height: 75,
        borderRadius: 5,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',

    }

});

//make this component available to the app
export default Categories;
