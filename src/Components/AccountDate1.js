import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Constant/Colors';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        ID: 'ATS-E-60464',
        FRM: "F-3",
        STD: "12-11-22",
        NP: "11p",
        PRICE: '€168.8',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        ID: 'ATS-E-60464',
        FRM: "F-1",
        STD: "22-11-22",
        NP: "11p",
        PRICE: '€158.8',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        ID: 'ATS-E-60464',
        FRM: "F-3",
        STD: "24-11-12",
        NP: "11p",
        PRICE: '€178.8',
    },

];
const Item = ({ item, onPress, textColor }) => (

    <View style={[styles.item,]}>
        <TouchableOpacity><Text style={[styles.title,]}>{item.ID}</Text></TouchableOpacity>
        <TouchableOpacity><Text style={[styles.title,]}>{item.FRM}</Text></TouchableOpacity>
        <TouchableOpacity><Text style={[styles.title,]}>{item.STD}</Text></TouchableOpacity>
        <TouchableOpacity><Text style={[styles.title,]}>{item.NP}</Text></TouchableOpacity>
        <TouchableOpacity><Text style={[styles.title,]}>{item.PRICE}</Text></TouchableOpacity>
    </View>
);
const AccountData1 = () => {
    const [selectedId, setSelectedId] = useState()
    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
            />
        )
    }
    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={setSelectedId}
            />
        </SafeAreaView>
    )

}
export default AccountData1

const styles = StyleSheet.create({
    item: {
        height: 48,
        width: 327,
        borderRadius: 8,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 2,
        padding: 10
    },
    title: {
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 12,
        lineHeight: 16,
        color: Colors.black
    }
})