import { View, Text } from 'react-native'
import React from 'react'

const ProductDetail = ({ route }) => {

    let { id } = route.params
    return (
        <View>
            <Text>Id: {id}</Text>
        </View>
    )
}

export default ProductDetail