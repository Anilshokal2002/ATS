import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { IMAGE } from '../Constant/Images'
import Colors from '../Constant/Colors'

const StepOnlineQuots = ({ number, step, text, style, lineHeight }) => {
    return (
        <View style={{ flexDirection: "column",}}>
            <View style={[styles.container, style]}>
                <View style={styles.Box}>
                    <Image source={IMAGE.box} style={styles.Box}></Image>
                    <Text style={styles.number}>{number}</Text>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.step}>{step}</Text>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
            {lineHeight ?
                <View style={styles.line}></View> : null}
        </View>
    )
}

export default StepOnlineQuots

const styles = StyleSheet.create({
    Box: {
        width: 36,
        height: 38,
        justifyContent: "center",
        alignItems: "center",
        // transform:[{rotate:"8deg"}]
    },
    container: {
        flexDirection: "row"
    },
    line: {
        backgroundColor: Colors.primary,
        height: 24,
        width: 1,
        marginLeft: 17,
        transform:[{rotate:"8deg"}]
    },
    text: {
        color: Colors.black,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500"
    },
    step: {
        color: "#2B7FFE",
        fontSize: 12,
        lineHeight: 16
    },
    number: {
        fontSize: 14,
        fontWeight: "500",
        color: '#2B7FFE',
        position: "absolute"
    },
})