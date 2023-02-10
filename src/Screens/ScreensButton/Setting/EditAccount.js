import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationHeader from '../../../Components/NavigationHeader'
import Colors from '../../../Constant/Colors'
import CommonTextInput from '../../../Components/CommonTextInput'
import Buttons from '../../../Components/Button'

const EditAccount = ({ navigation }) => {
    return (
        <View>
            <NavigationHeader  navigation={navigation}
                text={"Edit account information"}
                // on_press={() => { navigation.navigate("Setting") }}
                color={Colors.black}
            />
            <ScrollView>
                <View style={{}}>
                    <CommonTextInput
                        labelText={"Name"}
                        placeholder="Name"
                    />
                    <CommonTextInput
                        labelText={"Family name"}
                        placeholder="Family name"
                    />
                    <CommonTextInput
                        labelText={"Company"}
                        placeholder="Company"
                    />
                    <CommonTextInput
                        labelText={"Phone number"}
                        placeholder="Phone number"
                    />
                    <CommonTextInput
                        labelText={"E-mail address"}
                        placeholder="Mail address"
                    />
                    <CommonTextInput
                        labelText={"zip code"}
                        placeholder="zip code "
                    />
                    <CommonTextInput
                        labelText={"Address 1"}
                        placeholder="address"
                    />
                    <CommonTextInput
                        labelText={"Address 2"}
                        placeholder="address"
                    />
                    <CommonTextInput
                        labelText={"City"}
                        placeholder="City"
                    />
                    <CommonTextInput
                        labelText={"Country"}
                        placeholder="Country"
                    />
                </View>
                <View>
                    <Buttons
                        btn_text={"Save"}
                        color="#fff"
                        style={{ marginBottom: "17%", marginTop: "5%" }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default EditAccount

const styles = StyleSheet.create({})