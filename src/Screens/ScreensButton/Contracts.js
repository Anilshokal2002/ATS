import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import DataItem from '../../Components/DataItem'
import NavigationHeader from '../../Components/NavigationHeader'
import Colors from '../../Constant/Colors'
import DataItemContract from '../../Components/DataItemContract'

const Contracts = ({navigation}) => {
    return (
        <View>
            <NavigationHeader  navigation={navigation}
                text={"Contracts"}
                color={Colors.black}
                count={"48 contracts"}
            />
            <View style={{ margin: 15, marginTop: 0 }}>
                <View style={styles.View2}>
                    <View style={styles.dataLabel}>
                        <Text style={styles.DataLabelText}>ID</Text>
                        <Text style={styles.DataLabelText}>          START DATE</Text>
                        <Text style={styles.DataLabelText}>END DATE</Text>
                        <Text style={styles.DataLabelText}>PRICE</Text>
                    </View>
                    <ScrollView >
                        <View>
                            <DataItemContract/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Contracts

const styles = StyleSheet.create({
    View2: {

    },
    EstimationText: {
        fontSize: 16,
        fontWeight: "500",
        color: Colors.black,
        lineHeight: 24,
        fontFamily: "Helvetica Now Display"
    },
    SeeAll: {
        fontSize: 14,
        fontFamily: 'OpenSans-SemiBold',
        color: '#2B7FFE',
        marginRight: 8,
    },
    dataLabel: {
        height: 48,
        backgroundColor: "#2447A2",
        flexDirection: "row",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-around"
    },
    DataLabelText: {
        color: "#ffffff"
    }
})