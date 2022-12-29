import { View, Text } from 'react-native'
import React from 'react'
import ProfileMainScreen from './ProfileMainScreen'
import UpdatePasswordScreen from './UpdatePasswordScreen'
import UpdateProfileScreen from './UpdateProfileScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack'


const ProfileMobileStack = createNativeStackNavigator();

const ProfileStack = () => {


    return (<>
        <ProfileMobileStack.Navigator>
            <ProfileMobileStack.Screen name='ProfileMain' component={ProfileMainScreen} />
            <ProfileMobileStack.Screen name='UpdatePassword' component={UpdatePasswordScreen} />
            <ProfileMobileStack.Screen name='UpdateProfile' component={UpdateProfileScreen} />
        </ProfileMobileStack.Navigator>
    </>
    )
}

export default ProfileStack