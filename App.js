import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './src/Categories';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='categories'>
     
        <Stack.Screen
          name='categories'
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  stretch: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',

  },
  overlay: {
    backgroundColor: 'rgba(255,0,0,0.5)',
  },
  avatarStyle: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 50,
    alignSelf: 'center',
  },
  box: {
    // height:'30%',
    backgroundColor: '#070627',
    flex: 1
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1em',
    margin: 12
  },
  btn: {
    width: '70%',
    backgroundColor: '#7EE1D1',
    display: 'flex',
    justifyContent: 'center',
    height: 30,
    borderRadius: 10,
    alignSelf: 'center'

  }
});
