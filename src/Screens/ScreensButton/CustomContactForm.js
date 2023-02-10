import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CommonTextInput from '../../Components/CommonTextInput'
import { IMAGE } from '../../Constant/Images'
import RadioButton from '../../Components/RadioButton'
import Buttons from '../../Components/Button'
import Radio from '../../Components/RadioButton'
import Colors from '../../Constant/Colors'
import DatePicker from '../../Components/DatePicker'

const CustomContactForm = ({ gender }) => {
    return (
        <View style={{ width: 327, alignSelf: "center" }}>
            <View style={styles.main}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Text style={[styles.text,]}>CONTACT INFORMATION</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <CommonTextInput
                    labelText={"Your first name"}
                    placeholder="Enter first name"
                />
                <CommonTextInput
                    labelText={"Your last name"}
                    placeholder="Enter last name"
                />
                <CommonTextInput
                    labelText={"Telephone"}
                    placeholder="Enter your phone number"
                />
                <CommonTextInput
                    labelText={"Address"}
                    placeholder="Enter your address"
                />
                <CommonTextInput
                    labelText={"Postal code"}
                    placeholder="Enter postal code"
                />
                <CommonTextInput
                    labelText={"City"}
                    placeholder="Enter your city name"
                />
                <CommonTextInput
                    labelText={"Your E-mail"}
                    placeholder="Enter mail address"
                />
                <CommonTextInput
                    labelText={"First name of sport to be insured"}
                    placeholder="Enter sport first name"
                />
                <CommonTextInput
                    labelText={"Last name of sport to be insured"}
                    placeholder="Enter sport last name"
                />
                <DatePicker
                    labelText={"Date of birth"}
                    placeholder='Select date'
                />
                <CommonTextInput
                    labelText={"What sport dose the insured practice"}
                    placeholder="Enter sport name"
                />
                <CommonTextInput
                    labelText={"If motor vehicle specify"}
                    placeholder="Make/Model/Year"
                />
                <CommonTextInput
                    labelText={"Event locations"}
                    placeholder="Enter event location"
                />
                <CommonTextInput
                    labelText={"Event name"}
                    placeholder="Enter event name"
                />
                <DatePicker
                    labelText={"Starting date"}
                    placeholder='Select date'
                />
                <DatePicker
                    labelText={"Ending date"}
                    placeholder='Select date'
                />

                <View style={styles.radioButton}>

                    <View style={styles.label}>
                        <View style={{ height: 16, width: 2, backgroundColor: Colors.primary }}></View>
                        <Text style={styles.labelText}>Repatriation and medical transport<Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={styles.multiButton}>
                        <RadioButton
                            ButtonName={"Real fixed cost"}
                        />
                    </View>
                </View>
                {/* {gender.map((gender, key) => {
                    return ( */}
                <View style={styles.radioButton}>
                    <View style={styles.label}>
                        <View style={{ height: 16, width: 2, backgroundColor: Colors.primary }}></View>
                        <Text style={styles.labelText}>Surgical, pharmaceutical, hospitalization medical expenses<Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={[styles.multiButton, { justifyContent: "space-between" }]}>
                        <RadioButton
                            ButtonName={"5 000"}
                        />
                        <RadioButton
                            ButtonName={"50 000"}
                        />
                        <RadioButton
                            ButtonName={"150 000"}
                        />
                        <RadioButton
                            ButtonName={"200 000"}
                        />
                    </View>
                </View>
                {/* );
                })} */}
                <View style={styles.radioButton}>
                    <View style={styles.label}>
                        <View style={{ height: 16, width: 2, backgroundColor: Colors.primary }}></View>
                        <Text style={styles.labelText}>Capital death/disability<Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={[styles.multiButton, { justifyContent: "space-between" }]}>
                        <RadioButton
                            ButtonName={"15 000"}

                        />
                        <RadioButton
                            ButtonName={"50 000"}
                            style={{ marginStart: 10 }}

                        />
                        <RadioButton
                            ButtonName={"100 000"}
                            style={{ marginStart: 10 }}

                        />
                        <RadioButton
                            ButtonName={"200 000"}
                            style={{ marginStart: 10 }}

                        />
                    </View>
                    <RadioButton
                        ButtonName={"300 000"}
                    />
                </View>

                <View style={styles.radioButton}>
                    <View style={styles.label}>
                        <View style={{ height: 16, width: 2, backgroundColor: Colors.primary }}></View>

                        <Text style={styles.labelText}>Have you hsd any accidents?<Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={[styles.multiButton]}>
                        <RadioButton
                            ButtonName={"Yes"}
                        />
                        <RadioButton
                            ButtonName={"No"}
                            style={{ marginStart: 20 }}
                        />
                    </View>
                </View>
                <View style={styles.radioButton}>
                    <View style={styles.label}>
                        <View style={{ height: 16, width: 2, backgroundColor: Colors.primary }}></View>
                        <Text style={styles.labelText}>Have you been injured<Text style={{ color: "red" }}>*</Text></Text>
                    </View>
                    <View style={styles.multiButton}>
                        <RadioButton
                            ButtonName={"Yes"}
                        />
                        <RadioButton
                            ButtonName={"No"}
                            style={{ marginStart: 20 }}
                        />
                    </View>
                </View>


                <CommonTextInput
                    labelText={"Description of injuries"}
                    placeholder="Write description of injuries"
                    inputStyle={{ height: 80 }}
                />
                <CommonTextInput
                    labelText={"Comment"}
                    placeholder="Write comment"
                    inputStyle={{ height: 80 }}
                />
                <CommonTextInput
                    labelText={"Supporting document"}
                    placeholder="Choose file"
                    icon={IMAGE.document}
                    style={{ height: 13.33, width: 6.67, tintColor: "#AFB1B4" }}
                />


                <View style={{ paddingBottom: "20%" }}>
                    <Buttons
                        btn_text={"Next Step"}
                        color="#fff"
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default CustomContactForm

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10.6,
        marginBottom: 5,
        justifyContent: "space-between",
        marginTop: 20,
        flexDirection: "row"
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        marginStart: 8,
        color: Colors.black
    },
    label: {
        // width: 327,
        // borderLeftWidth: 1.5,
        // paddingLeft: 5,
        // borderColor: Colors.primary,
        // alignSelf: "center",
        marginTop: 8,
        // marginStart:"6%",
        flexDirection: "row"

    },
    labelText: {
        color: Colors.black,
        paddingStart: 5
    },
    radioButton: {
        // width: 327,

        // alignSelf: "center",
        // justifyContent:"space-between"
    },
    multiButton: {
        flexDirection: "row",
        // width:327,
        // justifyContent:"space-between"
        // marginStart:"20%"
        marginTop: "2%"
    }
})