import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NavigationHeader from '../../Components/NavigationHeader'
import Colors from '../../Constant/Colors'
import { IMAGE } from '../../Constant/Images'
import SettingComponent from "../../Components/SettingComponent"
import { Modal } from 'react-native'
import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native'

const Setting = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1, }}>
            <NavigationHeader navigation={navigation}
                text={"Settings"}
                on_press={() => { navigation.navigate("Home") }}
                color={Colors.black}
            />
            <SettingComponent
                text={"Edit account"}
                on_press={() => { navigation.navigate("EditAccount") }}
            />
            <SettingComponent
                text={"Sports list"}
                on_press={() => { navigation.navigate("SportsList") }}
            />
            <SettingComponent
                text={"Our formulas"}
                on_press={() => { navigation.navigate("OurFormulas") }}
            />
            <SettingComponent
                text={"Terms and conditions"}
                on_press={() => { navigation.navigate("TermsAndConditions") }}
            />
            <SettingComponent
                text={"Frequently asked questions"}
                on_press={() => { navigation.navigate("FrequentlyAskedQuestion") }}
            />
            <SettingComponent
                text={"Change Password"}
                on_press={() => { navigation.navigate("ChangePassword") }}
            />
            <SettingComponent
                text={"Log out"}
                on_press={() => setModalVisible(true)}
            />
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <View style={{ flexDirection: "row", alignItems: "center", padding: "2%" }}>
                            <Image source={IMAGE.accountFile} style={styles.Image} />
                            <Text style={{ fontSize: 16, lineHeight: 24, color: Colors.black }}>Log out from the account</Text>
                        </View>
                        <View style={{ alignSelf: "center", padding: "3%" }}>
                            <Text style={{ lineHeight: 20, color: Colors.black }}>
                                Are you sure you would like to sign out from your Assure Ton Sport account?
                            </Text>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity
                                style={[styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.buttonClose, { backgroundColor: "#E8503A" }]}
                                onPress={async () => {
                                    await auth().signOut()
                                    // await GoogleSignin.signOut();
                                }}>
                                <Text style={styles.textStyle}>Log out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
    },
    modalView: {
        backgroundColor: 'white',
        elevation: 10,
        width: 327,
        borderRadius: 10

    },
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "5%"
    },
    buttonClose: {
        padding: "5%",
        backgroundColor: Colors.primary,
        borderRadius: 10,
        paddingHorizontal: "15%"
    },
    Image: {
        height: 48,
        width: 48
    }
})