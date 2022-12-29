import { View, Text, Button } from 'react-native'
import React from 'react'

const ProfileMainScreen = ({navigation}) => {
  return (
    <View>
      <Text>ProfileMainScreen</Text>
      <Button onPress={() => navigation.navigate("UpdatePassword")} title='Go to update password'></Button>
    </View>
  )
}

export default ProfileMainScreen