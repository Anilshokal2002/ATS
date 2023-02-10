import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGE } from '../Constant/Images'
import RadioButton from './RadioButton'
import Buttons from './Button'
import Colors from '../Constant/Colors'

const DATA = [
    {
        id: 1,
        title: "0€"
    },
    {
        id: 2,
        title: "30€"
    },
    {
        id: 3,
        title: "40€",
    },
    {
        id: 4,
        title: "50€",
    },
]


const FormulaStep4Component = ({ formula_number, risk, src, Amount }) => {
    const [radio, setRadio] = useState(1)

    return (
        <View>
            <View style={{ backgroundColor: Colors.primary, marginVertical: 10, borderRadius: 8, padding: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ lineHeight: 20, fontWeight: "500", color: "#FFF" }}>
                            FORMULA {formula_number}
                        </Text>
                        <Image source={src}
                            style={{ height: 60, width: 60, marginVertical: 8 }}
                        />
                        <Text style={{ lineHeight: 20, fontWeight: "500", color: "#FFF", }}>
                            Sport risk:{risk}
                        </Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                            <Text style={{ fontSize: 24, color: "#FFF" }}>{Amount}€</Text>
                            <Text style={{ color: "#FFF" }}>/PERDAY</Text>
                        </View>
                        <Text style={{ color: "#ffff", fontSize: 10, marginTop: 8 }}>Hospital daily allowances:</Text>
                        <View style={{ flexDirection: "row", marginVertical: 4 }}>

                            {DATA.map((data) => {
                                return (
                                    <View style={[{ flexDirection: "row", }]}>
                                        <TouchableOpacity style={styles.TouchableOpacity}
                                            onPress={() => {
                                                setRadio(data.id)
                                            }}
                                        >
                                            {radio === data.id ?
                                                <Image source={IMAGE.RadioButton_on} style={styles.Image} />
                                                :
                                                <Image source={IMAGE.RadioButton_off} style={styles.Image} />}
                                        </TouchableOpacity>
                                        <View>
                                            <Text style={[{ color:"#FFF", }]}>{data.title}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                        <View>
                            <Buttons
                                style={{ width: 124, height: 34, backgroundColor: "#FFF", borderRadius: 4, }}
                                btn_text={"More information"}
                                color={Colors.primary}
                                text_style={{ fontSize: 13 }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FormulaStep4Component

const styles = StyleSheet.create({
    labelText: {
        color: Colors.black
    },
    img: {
        height: 16,
        width: 16,
        tintColor: "#FFF",
        paddingRight: 5
    },
    TouchableOpacity: {
        height: 20,
        width: 20,
    },
    Image: {
        height: 16,
        width: 16,
        tintColor: "#FFF",
    },
})