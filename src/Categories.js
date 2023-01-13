//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, Image, FlatList } from 'react-native';
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

const dateView = ({ dataDate }) => (
    <View>

    </View>
)



const Category = ({ data ,navigation}) => (
    <TouchableOpacity style={{ marginBottom: 12, height: 100 }} onPress={() => navigation.navigate('cate',{
        categoryName:data
    }) }>
        <View style={{ flex: 1, padding: 12 }}>
            <View style={[
                StyleSheet.absoluteFillObject,
                { backgroundColor: 'white', borderRadius: 16,padding:16 }]}>
                <Text style={styles.title}>{data}</Text>
                {/* <Text style={styles.categoryName}>{data.username}</Text> */}
                {/* <Image source={{ uri: data.image }} style={styles.image } /> */}
            </View>
        </View>
    </TouchableOpacity>
);

const Item = ({ data}) => (

    <View style={styles.cardView}>
        <Image style={styles.img} source={img2} />
        <View style={styles.inputNumber}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => { console.log("pressed"); }}
            >
                <AntDesign name="pluscircleo" size={16} color="#50E683" />

            </TouchableOpacity>
            <Text style={{ color: '#50E683', fontSize: '1em', fontWeight: 'bold' }}>
                0
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => { console.log("pressed"); }}
            >
                <AntDesign name="minuscircleo" size={16} ssscolor="#50E683" />
            </TouchableOpacity>
        </View>
        <View style={styles.details}>
            <Text style={{ color: '#50E683' }}>{data.title}</Text>
            <Text style={{ color: '#50E683' }}>Product Price</Text>
        </View>

    </View>
);

const Categories = ({navigation}) => {
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
        padding: 12

        // backgroundColor: '#1D2D44',
    },
    image: {
        width: 100,
        height: 120,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        left: 12
    },
    title: {
        fontWeight:'600',
        fontSize:16
    },
    categoryName: {
        fontSize:11,
        opacity:0.7
    },
    bg: {

    },

    cardView: {
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        // alignContent: 'center',
        justifyContent: 'space-evenly',
        borderBottomColor: '#50E683',
        borderBottomWidth: '1px',
        padding: 5,
        margin: 5,
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
        width: 85,
        height: 75,
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
