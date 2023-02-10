import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGE } from '../Constant/Images'

const CheckBox = ({btn_text}) => {
    const [clicked, setClicked] = useState(true)

    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    onPress={() => { setClicked(!clicked) }}
                    style={{ paddingVertical: 5 }}
                >
                    {clicked ?
                        <Image source={IMAGE.unCheckedButton} style={styles.image} />
                        :
                        <Image source={IMAGE.CheckButton} style={styles.image} />

                    }
                </TouchableOpacity>
                <Text style={{ paddingHorizontal: 5, alignSelf: "center" }}>{btn_text}</Text>
            </View>
        </View>
    )
}
``
export default CheckBox

const styles = StyleSheet.create({
    image:{ 
        height: 20, 
        width: 20, 
        borderWidth: .2 
    }
})