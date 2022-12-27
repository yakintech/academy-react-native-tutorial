import { View, Text, Button } from 'react-native'
import React from 'react'


const Home = ({navigation}) => {

    const goToAbout = () => {
        navigation.navigate('Products')
    }

    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='Go to Products Screen' onPress={() => goToAbout()}></Button>
        </View>
    )
}

export default Home