import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationHeader from '../../Components/NavigationHeader'
import CommonTextInput from '../../Components/CommonTextInput'
import Colors from '../../Constant/Colors'
import Buttons from '../../Components/Button'
import { IMAGE } from '../../Constant/Images'
import Textinput from '../../Components/textInput'

const countries = [
    { Language: 'Baseball', },
    { Language: 'Softball', },
    { Language: 'Soccer', },
    { Language: 'Cricket', },
    { Language: 'Hockey', },
    { Language: 'Football', },
]


const QuotationStep1 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 5, }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 5 }}>
                        <NavigationHeader
                            navigation={navigation}
                            text={"ONLINE QUOTATION"}
                            color={Colors.primary}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", margin: "5%" }}>
                        <Image source={IMAGE.RectangleStep} style={{ width: 46, height: 24, }} />
                        <Text style={{ fontSize: 10, position: "absolute" }}>Step 1</Text>
                    </View>
                </View>

                <Textinput
                    text={"Select your sport"}
                    datas={countries}
                    labelText={"What type of sport you will be insuring"}
                />
            </View>

            <View style={{ flex: 1, marginTop: "60%" }}>
                <Buttons
                    btn_text={"Next Step"}
                    color={"#fff"}
                    on_press={() => { navigation.navigate("QuotationStep2") }}
                />
            </View>
        </View>
    )
}

export default QuotationStep1

const styles = StyleSheet.create({})