import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/navigationSample/Home';
import About from './src/navigationSample/About';
import Products from './src/navigationSample/Products';
import ProductDetail from './src/navigationSample/ProductDetail';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={
          {
            title: 'Anasayfa',
            headerStyle:{
              // backgroundColor:'tomato'
            }
          }
        } />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App