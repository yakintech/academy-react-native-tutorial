import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, List } from 'react-native-paper'



const Home = ({ navigation }) => {

    const [suppliers, setsuppliers] = useState([]);


    useEffect(() => {
        fetch(`https://northwind.vercel.app/api/suppliers`)
            .then(res => res.json())
            .then(data => {
                setsuppliers(data);
            })
    }, [])


    const goToAbout = () => {
        navigation.navigate('Products')
    }

    return (
        <ScrollView>
            {
                suppliers && suppliers.map((item) => {
                    return <List.Item
                        title={item.companyName}
                        description="Item description"
                        left={props => <List.Icon {...props} icon="folder" />}
                    />
                })
            }
        </ScrollView>
    )
}

export default Home