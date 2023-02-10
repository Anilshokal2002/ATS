import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGE } from '../Constant/Images';
import DatePicker from 'react-native-date-picker'

const Date = ({
    clicked,
    text
}) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
        <View>
            <TouchableOpacity
                onPress={() => setOpen(true)}
                style={styles.TouchableOpacity}
            >
                <Text style={{ fontWeight: '600' }}>
                    Date
                </Text>
                <Image
                    source={IMAGE.Calender}
                    style={styles.updateImage}
                />
            </TouchableOpacity>
            <DatePicker
                modal
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
        </View>
    )
}

export default Date

const styles = StyleSheet.create({
    TouchableOpacity: {
        width: 327,
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
})