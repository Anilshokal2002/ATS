import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { IMAGE } from '../../Constant/Images'
import Buttons from '../../Components/Button'
import Colors from '../../Constant/Colors'
import AccountData from '../../Components/AccountData'
import Auth from "@react-native-firebase/auth"
import AccountData1 from '../../Components/AccountDate1'
const AccountInfo = () => {
    const [show, setShow] = useState(true)
    const [color, setColor] = useState(true)
    return (
        <ScrollView
        style={{flex:1}}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ margin: 15, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 12 }}>Hello</Text>
                            <Image source={IMAGE.Waving_hand} style={{ height: 16, width: 16 }} />
                        </View>
                        <View>
                            <Text style={styles.Arefine}>{Auth().currentUser.email}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.TouchableOpacity}
                    // onPress={() => { navigation.navigate("EditAccount") }}
                    >
                        <Image source={IMAGE.accountFile} style={{ height: 46, width: 46 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonComponent}>
                    <Buttons
                        style={[styles.buttonColor, color ? { backgroundColor: Colors.primary } : { backgroundColor: "#FFF", }]}
                        backgroundColor={Colors.primary}
                        btn_text={'Estimations'}
                        color="#000"
                        on_press={() => {
                            setShow(true)
                            setColor(true)
                        }}
                    />
                    <Buttons
                        style={[styles.buttonColor, color ? { backgroundColor: "#FFF" } : { backgroundColor: Colors.primary }]}
                        btn_text={"Contracts"}
                        color="#000"
                        on_press={() => {
                            setShow(false)
                            setColor(false)
                        }}
                    />
                </View>
                    <View style={{ backgroundColor: "#EDF0F8", borderRadius: 12, }}>
                        <View>
                            <View style={styles.dataLabel}>
                                <Text style={styles.DataLabelText}>ID</Text>
                                <Text style={styles.DataLabelText}>               FRM</Text>
                                <Text style={styles.DataLabelText}>STD</Text>
                                <Text style={styles.DataLabelText}>      NP</Text>
                                <Text style={styles.DataLabelText}>PRICE</Text>
                            </View>
                            {show ? <AccountData /> : <AccountData1 />}
                        </View>
                    </View>
            </View>
        </ScrollView>
    )
}

export default AccountInfo

const styles = StyleSheet.create({
    TouchableOpacity: {
        alignSelf: "center",
        height: 48, width: 48,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10
    },
    Arefine: {
        fontSize: 20,
        fontWeight: "700",
        color: Colors.black,
    },
    buttonComponent: {
        backgroundColor: "#fff",
        flexDirection: "row",
        // width: 327,
        height: 48,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf: "center",
        padding: 4,
        paddingBottom: "4%"
    },
    dataLabel: {
        height: 48,
        backgroundColor: "#2447A2",
        flexDirection: "row",
        marginTop: 10,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-around",
    },
    DataLabelText: {
        color: "#ffffff"
    },
    buttonColor: {
        width: "50%",
        height: 40,
        backgroundColor: "#fFF",
        borderRadius: 5,
    }
})