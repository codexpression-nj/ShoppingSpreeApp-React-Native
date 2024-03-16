//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { SharedElement } from 'react-native-shared-element';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const animation = {
    0: { opacity: 0, translateY: 100 },
    1: { opacity: 1, translateY: 0 }
}
// create a component
const ProductDetails = ({ navigation, route }) => {
    const { item } = route.params;
    // console.log(item);
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.review}>
            <AntDesign name="hearto" size={24} color="black" />
                {/* <Ionicons name="md-heart-outline" size={24} color="black" /> */}
                <View style={styles.rating}>
                <MaterialIcons name="star-rate" size={16} color="orange" />
                    {/* <Ionicons name="md-star-outline" size={16} color="orange" /> */}
                    <Text> {item.rating.rate}  </Text>
                    <Text>({item.rating.count} reviews)</Text>
                </View>
            </View>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.discription}>{item.description}</Text>

            <View style={styles.priceView}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Text style={{ fontWeight: '300', fontSize: 12 }}>Total Price</Text>
                    <Text style={styles.price}>R{item.price}</Text>

                </View>
                <TouchableOpacity style={styles.addCartBtn} onPress={()=> navigation.navigate('cart')}>
                    <Text style={{ color: 'white', alignSelf: 'center', alignItems: 'center' }}>Add To Cart</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // position:'relative'
        flex: 1
    },
    image: {
        width: 140,
        height: 160,
        resizeMode: 'center',
        // alignItems: 'center',

    },
    imageContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: 300,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 16,
        marginTop: 16
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    title: {
        fontWeight: '800',
        margin: 16,
        fontSize: 20

    },
    discription: {
        alignSelf: 'center',
        fontWeight: '300',
        marginLeft: 16,
        marginRight: 16,
        fontSize: 12,
        lineHeight: 22
    },
    price: {
        // flex: 1,
        fontWeight: '500',
        fontSize: 24,
        // marginLeft:5
    },
    addCartBtn: {
        backgroundColor: "black",
        height: 50,
        width: 140,
        borderRadius: 6,
        // alignContent:'center',
        justifyContent: 'center',
        flex: 2
    },
    priceView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 16,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center'
    },
    review:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        margin: 16,
        marginBottom:-6

    }

});

//make this component available to the app
export default ProductDetails;
