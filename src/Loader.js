//import liraries
import React, { Component, useEffect, useRef } from 'react';
import { View,Button, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


// create a component
const Loader = () => {
    const animation = useRef(null);
console.log('loading');
    return (
        <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            // backgroundColor: '#eee',
          }}
          source={require('../assets/shoppingBag.json')}
        />
     
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#2c3e50',
    // },
    animationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      buttonContainer: {
        paddingTop: 20,
      },
});

//make this component available to the app
export default Loader;
