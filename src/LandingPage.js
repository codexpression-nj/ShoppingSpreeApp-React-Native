//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// create a component
const LandingPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} imageStyle={{opacity: 0.5 }} source={require('../assets/backg.jpg')}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>
                        NEW ARRIVALS TODAY
                    </Text>
                    <Pressable onPress={()=>{navigation.navigate('categories')}}>
                    <Ionicons name="arrow-forward-outline" size={70}  color="white" style={{fontWeight:'100'}} />
                    </Pressable>
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
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
    },
    title: {
        fontWeight: '500',
        fontSize: 50,
        padding: 20,
        color: 'white',
        textTransform: 'capitalize',
      
    },
    titleView: {
        display:"flex",
        justifyContent:'space-evenly',
       flexDirection:'row',
        alignItems:'center',
        width:'100%',
    }

});

//make this component available to the app
export default LandingPage;
