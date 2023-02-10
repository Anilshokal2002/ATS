import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGE } from '../Constant/Images'
import Colors from '../Constant/Colors'
import { Flex } from '@react-native-material/core'

const NavigationHeader = ({ text, color, count, navigation={}, source, style }) => {
    const [backIcon ,setBackIcon] =useState(true)
    return (
        <View style={styles.main}>
            <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                <View style={{flex:5,flexDirection: "row", alignItems: "center",}}>
                    <TouchableOpacity style={styles.TouchableOpacity}
                        onPress={()=>{
                            navigation.goBack()
                        }}
                    >
                    {backIcon?

                        <Image source={IMAGE.Keyboard_backspace} style={{ height: 10.6, width: 16.8 }} />:null}


                    </TouchableOpacity>
                    <Text style={[style, styles.text, { color }]}>{text}</Text>
                </View>

                <View>
                
                <View style={{flexDirection: "row", alignSelf: "center",}}>
                    {count?
                        <Text style={{ color: Colors.primary, marginEnd:10,}}>{count}</Text>
                        :
                        <TouchableOpacity style={{}}>
                        <Image source={source} style={styles.image} />
                    </TouchableOpacity>}
                </View>


                
                </View>
            </View>
        </View>
    )
}
export default NavigationHeader
const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10.6,
        marginBottom: 5,
        justifyContent: "space-between",
        // position:"absolute",
        // backgroundColor: "red",
        // flex: 1,
        marginTop:20,
        flexDirection: "row"
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        // textTransform: "uppercase",
        marginStart: 8,
        // tintColor:Colors.black
        // backgroundColor: "red"
    },
    TouchableOpacity: {
        height: 24,
        width: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    image:{
        height: 20, 
        width: 20,
        marginStart:20 ,
        // position:"absolute"
        
    },
})