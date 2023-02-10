import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { IMAGE } from '../../Constant/Images'
import Buttons from '../../Components/Button'
import Colors from '../../Constant/Colors'
import AccountData from '../../Components/AccountData'

const AccountInfo = () => {
    return (
        <ScrollView
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
                            <Text style={styles.Arefine}>Arefin Shuvo</Text>
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
                        style={{ width: 158, height: 40, backgroundColor: Colors.primary ,borderRadius:5}}
                        backgroundColor={Colors.primary}
                        btn_text={'Estimations'}
                        color="#FFF"
                    />
                    <Buttons
                        style={{ width: 158, height: 40, backgroundColor: "#fFF",borderRadius:5 }}
                        btn_text={"Contracts"}
                    />
                </View>
                <ScrollView>
                    <View style={{ backgroundColor: "#EDF0F8", borderRadius: 12, }}>
                        <View>
                            <View style={styles.dataLabel}>
                                <Text style={styles.DataLabelText}>ID</Text>
                                <Text style={styles.DataLabelText}>               FRM</Text>
                                <Text style={styles.DataLabelText}>STD</Text>
                                <Text style={styles.DataLabelText}>      NP</Text>
                                <Text style={styles.DataLabelText}>PRICE</Text>
                            </View>
                            <AccountData />
                            <AccountData />
                        </View>
                    </View>
                </ScrollView>
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
        width: 327,
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
        justifyContent: "space-around"
    },
    DataLabelText: {
        color: "#ffffff"
    }
})