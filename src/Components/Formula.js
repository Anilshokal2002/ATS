import { StyleSheet, Text, View , TouchableOpacity,  Image } from 'react-native'
import React from 'react'
import { IMAGE } from '../Constant/Images'

const Formula = ({
    Source,
    formulaNumber,
    risk,
    on_press = () => {},
}) => {
    return (
        <View style={styles.TouchableOpacity} >
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
                    <View style={{ backgroundColor: "#FFF", height: 72, width: 72, alignItems: "center", justifyContent: "center", borderRadius: 8, margin: 4, flex: 1 }}>
                        <Image source={Source} style={{ height: 40, width: 40 }} />
                    </View>
                    <View style={{ flex: 2, marginStart: 10 }}>
                        <Text style={{ fontSize: 20, color: "#FFF", lineHeight: 30 }}>{formulaNumber}</Text>
                        <Text style={{ fontSize: 14, lineHeight: 20, color: "#FFF" }}>Sport:{risk}</Text>
                    </View>
                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
                    onPress={on_press}
                    >
                        <Image source={IMAGE.ellipse} style={{ height: 24, width: 24 }} />
                        <Image source={IMAGE.arrowBlue} style={{ position: "absolute", height: 8, width: 8 }} />
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default Formula

const styles = StyleSheet.create({
    TouchableOpacity: {
        // position: "absolute",
        height: 80,
        // width: 327,
        backgroundColor: Colors.primary,
        // alignSelf: "center",
        borderRadius: 8,
        // flex: 1,
        margin: "3%",
        marginVertical:"1.5%"
    },
})
