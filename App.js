import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/navigationSample/Home';
import About from './src/navigationSample/About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileStack from './src/tabNavigationSample/profile/ProfileStack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Tab.Navigator
          >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="alien-outline" color={color} size={26} />
            ),
          }}

        />
        <Tab.Screen
          name='About'
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="apple" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name='Profile'
          component={ProfileStack}
        

          options={{
            headerShown:false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="human-handsup" color={color} size={26} />
            ),
          }}
        />

      </Tab.Navigator>


    </NavigationContainer >

  )
}

export default App