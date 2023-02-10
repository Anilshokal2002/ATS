
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { IMAGE } from '../Constant/Images'
import Colors from '../Constant/Colors'

const RadioButton = ({  ButtonName,style ,img_style ,text_style}) => {
    const [radio, setRadio] = useState(true)
    return (
                <View style={[{ flexDirection: "row", },style]}>
                    <TouchableOpacity style={{ height: 20, width: 20, }}
                        onPress={() => { setRadio(!radio) }}>
                        {radio ?
                            <Image source={IMAGE.RadioButton_off} style={[styles.img,img_style]} />
                            :
                            <Image source={IMAGE.RadioButton_on} style={[styles.img,img_style]} />}
                    </TouchableOpacity>
                    <View>
                        <Text style={[{ color: Colors.black ,},text_style]}>{ButtonName}</Text>
                    </View>
                </View>            
    )
}

export default RadioButton

const styles = StyleSheet.create({
    labelText: {
        color: Colors.black
    },
    img:{ 
        height: 16, 
        width: 16,
        // tintColor:"#FFF"
    }

})



