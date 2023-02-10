import { Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Tabes/Home';
import OnlineQuotation from '../Screens/Tabes/OnlineQuotation';
import Contact from '../Screens/Tabes/Contact';
import MyAccount from '../Screens/Tabes/MyAccount';
import { IMAGE } from '../Constant/Images';
import Colors from '../Constant/Colors';
import { Stack } from '@react-native-material/core';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='Home'
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    // tabBarLabel: "Home",
                    tabBarLabelStyle: { marginBottom: 10 },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={IMAGE.Home}
                            style={{
                                resizeMode: "center",
                                height: 18.5,
                                width: 18.5,
                                tintColor: focused ? Colors.primary : Colors.black,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen name="OnlineQuotation" component={OnlineQuotation}
                options={{
                    tabBarLabelStyle: { marginBottom: 10 },
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={IMAGE.OnlineQuotation}
                            style={{
                                resizeMode: "center",
                                height: 18.5,
                                width: 18.5,
                                tintColor: focused ? Colors.primary : Colors.black,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen name="Contact" component={Contact}
                options={{
                    tabBarLabelStyle: { marginBottom: 10 },
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={IMAGE.Contact}
                            style={{
                                resizeMode: "center",
                                height: 18.5,
                                width: 18.5,
                                tintColor: focused ? Colors.primary : Colors.black,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen name="MyAccount" component={MyAccount}
                options={{
                    tabBarLabelStyle: { marginBottom: 10 },
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={IMAGE.MyAccount}
                            style={{
                                resizeMode: "center",
                                height: 18.5,
                                width: 18.5,
                                tintColor: focused ? Colors.primary : Colors.black,
                            }}
                        />
                    )
                }}
            />



            
        </Tab.Navigator>
    )
}


export default TabNavigation

const styles = StyleSheet.create({
    image: {
        resizeMode: "center",
        resizeMode: "center",
        height: 18.5,
        width: 18.5,
        marginBottom: 0,
        // tintColor:color?Colors.black:Colors.primary,
    },
    tab: {
        // marginBottom:0

    }
})
