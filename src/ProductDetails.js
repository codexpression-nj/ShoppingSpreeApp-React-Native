//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { SharedElement } from 'react-native-shared-element';

const animation = {
    0: { opacity: 0, translateY: 100 },
    1: { opacity: 1, translateY: 0 }
}
// create a component
const ProductDetails = ({ navigation, route }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <SharedElement id={`item.${item.key}.image`}>
            </SharedElement>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        width: 120,
        height: 130,
        resizeMode: 'center',
        alignItems: 'center',

    },
    imageContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: 200,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginTop: 16

    },
});
ProductDetails.sharedElements = (route) => {
    const { item } = route.params;
return [
    {
        id: `item.${item.key}.image`
    }
]
}
//make this component available to the app
export default ProductDetails;
