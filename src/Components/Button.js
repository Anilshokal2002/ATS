import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
// import  Colors  from '../Constant/Colors'

const Buttons = ({on_press,btn_text ,style ,color,text_style }) => {
    return (
        <TouchableOpacity style={[styles.TouchableOpacity,style]} 
        onPress={on_press}
        >
            <Text style={[styles.Text,{color},text_style]}>{btn_text}</Text>

        </TouchableOpacity>
    )
}
export default Buttons

const styles = StyleSheet.create({
    TouchableOpacity:{
        justifyContent:'center',
        height:48,
        width:327,
        borderRadius:8,
        alignItems:"center",
        alignSelf:"center",
        marginTop:10,
        backgroundColor:"#AFB1B4"
    },
    Text:{
        // fontSize:16,
        letterSpacing:1.5,
        textAlign:'center',
        position:'relative',
        fontFamily:'OpenSans-SemiBold',
        color:"#000",
        
    }
})
