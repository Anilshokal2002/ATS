import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import Colors from "../Constant/Colors"
const CommonTextInput = ({
    placeholder = '',
    style,
    keyboardType = "default",
    icon = '',
    error = '',
    onChangeText = () => { },
    onPress = () => { },
    hidepassword,
    passwordIcon,
    secureTextEntry,
    labelText,
    inputStyle,
    value = {},
}) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={{ width: 327, alignSelf: "center" }}>
                {labelText ?
                    <View style={[styles.label, { flexDirection: "row" }]}>
                        <View style={{ height: 16, width: 2, backgroundColor: Colors.primary }}></View>
                        <Text style={styles.labelText}>{labelText}<Text style={{ color: "red" }}>*</Text></Text>
                    </View> : null}
                <View style={[styles.TextInputStyle, inputStyle]} >
                    {icon ?
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image source={icon} style={[styles.image, style]}></Image>
                        </View> : null}
                    {/* {icon ? */}
                    <View>
                        <TextInput onChangeText={(text) => onChangeText(text)} style={[styles.input,]} placeholder={placeholder} placeholderTextColor="#888185"
                            keyboardType={keyboardType}
                            secureTextEntry={secureTextEntry}
                            value={value}
                        />
                    </View>
                    {/* : */}
                    <View style={{ alignItems: "center", justifyContent: "center", marginStart: "90%" }}>
                        {
                            passwordIcon &&
                            <TouchableOpacity style={styles.touchable}
                                onPress={onPress}
                            >
                                <Image source={passwordIcon} style={styles.image2}></Image>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default CommonTextInput;

const styles = StyleSheet.create({
    image: {
        tintColor: "#000E32",
    },
    TextInputStyle: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        width: 327,
        borderRadius: 10,
        height: 48,
        paddingLeft: 10,
        marginTop: 10,
    },
    input: {
        fontFamily: 'OpenSans-Medium',
        justifyContent: "center",
        fontSize: 14,
        color: "#797D85",
        lineHeight: 20,
        fontWeight: "400",
        position: 'absolute',
        width: 327,
    },
    touchable: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFF",
        position: "absolute",
    },
    image2: {
        height: 15.65,
        width: 17.54,
        resizeMode: "contain",
        tintColor: "#000E32",
    },
    label: {
        width: 327,
        alignSelf: "center",
        marginTop: 8,
    },
    labelText: {
        color: Colors.black,
        paddingLeft: 5
    }


})
