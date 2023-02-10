import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import NavigationHeader from '../../../Components/NavigationHeader'
import Colors from '../../../Constant/Colors'
import { IMAGE } from '../../../Constant/Images'
import Buttons from '../../../Components/Button'

const TermsAndConditions = ({navigation}) => {
    return (
        <View>
            <NavigationHeader  navigation={navigation}
                text={"Terms and Conditions"}
                color={Colors.black}
                // on_press={() => { navigation.navigate("Setting") }}
            />
            <View>
                <View>
                    <Image source={IMAGE.Rectangle_dot} style={{ height: 104, width: 327, justifyContent: "center", alignSelf: "center" }} />
                </View>
                <Buttons
                    btn_text={"Download in English"}
                    color={"#FFF"}
                    style={{ backgroundColor:Colors.primary }}
                />
                <Buttons
                    btn_text={"Download in French"}
                    color={"#FFF"}
                    style={{ backgroundColor:Colors.primary }}
                />
                <Buttons
                    btn_text={"Download in Spanish"}
                    color={"#FFF"}
                    style={{ backgroundColor:Colors.primary }}
                />
            </View>
        </View>
    )
}
export default TermsAndConditions

const styles = StyleSheet.create({})