//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// create a component
const LandingPage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} imageStyle={{opacity: 0.5 }} source={require('../assets/bgImage.jpg')}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>
                        NEW ARRIVALS TODAY
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        justifyContent: 'flex-end',
        // opacity: 0.2,
        backgroundColor: 'black',
        // alignItems:''
    },
    title: {
        fontWeight: '500',
        fontSize: 60,
        padding: 16,
        color: 'white',
        textTransform: 'capitalize',
        // textAlign :'right'
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    titleView: {
        alignItems: 'center',
    }

});

//make this component available to the app
export default LandingPage;
