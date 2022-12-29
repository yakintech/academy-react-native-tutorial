import { View, Text } from 'react-native'
import React , {useEffect}  from 'react'
import { useFocusEffect } from '@react-navigation/native'

const About = () => {

  useFocusEffect(() => {
    console.log('FOCUS!');
  }, [])

  useEffect(() => {
    
    console.log('ABOUT!');
  }, [])
  

  return (
    <View>
      <Text>About Screen</Text>
    </View>
  )
}

export default About