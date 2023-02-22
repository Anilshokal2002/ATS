import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { IMAGE } from '../Constant/Images'
import { FULL_WIDTH } from './HOC/layout'

const datePicker = ({
    labelText ={},
    placeholder ={},
}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <>
            {labelText ?
                <View style={[styles.label, { flexDirection: "row" }]}>
                    <View style={{ height: 16, width: 2, backgroundColor: Colors.primary }}></View>
                    <Text style={styles.labelText}>{labelText}<Text style={{ color: "red" }}>*</Text></Text>
                </View> : null}
            <TouchableOpacity
                onPress={() => setOpen(true)}
                style={styles.TouchableOpacity}
            >
                <Text style={{ fontWeight: '600' }}>
                    {placeholder}
                    {()=>{setDate(date)}}
                </Text>
                <Image
                    source={IMAGE.Calender}
                    style={styles.updateImage}
                />
            </TouchableOpacity>
            <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </>
    )
}

export default datePicker

const styles = StyleSheet.create({

    TouchableOpacity: {
        width: FULL_WIDTH*.9,
        height: 48,
        borderRadius: 10,
        // borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#fff"
    },
    updateImage: {
        width: 15,
        height: 15
    },
    labelText: {
        color: Colors.black,
        paddingLeft: 5
    },
    label: {
        width: FULL_WIDTH*.9,
        alignSelf: "center",
        marginTop: 8,
    },
})

