import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../Constant/Colors'
import { IMAGE } from '../Constant/Images'
const SettingComponent = ({text,on_press}) => {
    return (
        <View>
            <View style={styles.component}>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={on_press}
                >
                    <View style={styles.textComponent}>
                        <Text style={{ color: Colors.black }}>{text}</Text>
                    </View>
                    <View style={styles.imageComponent}>
                        <Image source={IMAGE.arrow}
                            style={styles.image}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SettingComponent

const styles = StyleSheet.create({
    touchableOpacity:{ 
        height: 48, 
        // width: 327, 
        backgroundColor: "#fff", 
        borderRadius: 8, 
        justifyContent: "center", 
        paddingStart: 16, 
        flexDirection: "row" 
    },
    imageComponent:{ 
        flex: 1, 
        marginStart: "30%", 
        justifyContent: "center", 
        alignItems: "center", 
    },
    image:{ 
        height: "25%", 
        width: "25%", 
        tintColor: Colors.black, 
    },
    component:{ 
        justifyContent: "center", 
        alignItems: "center", 
        margin: "4%" ,
        marginBottom:0 
    },
    textComponent:{ 
        flex: 5, 
        alignSelf: "center" 
    }
})