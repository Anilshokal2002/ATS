import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NavigationHeader from '../../Components/NavigationHeader'
import Colors from '../../Constant/Colors'
import CommonTextInput from '../../Components/CommonTextInput'
import { IMAGE } from '../../Constant/Images'
import Buttons from '../../Components/Button'
import { Formik } from 'formik';
import * as yup from 'yup';

const DATA = [
    {
        id: 1,
        title: "Accident,Sickness"
    },
    {
        id: 2,
        title: "Baggages"
    },
    {
        id: 3,
        title: "Death,Disability",
    },
]

const dateRegExp = /^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/;
const ReportDamage = ({ navigation }) => {
    const [radio, setRadio] = useState(1)
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <Formik
                initialValues={{
                    name: '',
                    contact: "",
                    Date: "",
                    Hour: "",
                    Couse: "",
                    Tangible: "",
                    Comment: "",
                    Proof: "",
                }}
                onSubmit={values => alert(JSON.stringify(values))}
                // onSubmit={() => { navigation.navigate("Tab") }}
                validationSchema={yup.object().shape({
                    name: yup.string().required('Please,Provide your name!'),
                    contact: yup.number().required('Please,Provide your contact!'),
                    Date: yup.string().required("Please,Provide the Date!"),
                    Hour: yup.string().required('Please,Provide the Hour damage!').min(1),
                    Couse: yup.string().required('Please,Provide the  Couse of damage!'),
                    Tangible: yup.string().required('Please,Provide the  Consequences!'),
                    Comment: yup.string().required('Please,Provide the Comment!'),
                    Proof: yup.string().required('Please,Provide the Proof!'),
                })}>
                {({
                    values,
                    handleChange,
                    errors,
                    setFieldTouched,
                    touched,
                    handleSubmit,
                }) => (
                    <View>
                        <NavigationHeader navigation={navigation}
                            text={"Report damage"}
                            color={"red"}
                            on_press={() => { navigation.navigate("Home") }}
                            count={"Contact us"}
                        />
                        <ScrollView>
                            <View style={styles.insuranceDurationView}>
                                <Text style={{ color: Colors.black }}>Insurance duration<Text style={{ color: "red" }}>*</Text></Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                {DATA.map((data) => {
                                    return (
                                        <View style={{ flexDirection: "row" }}>
                                            <TouchableOpacity style={styles.TouchableOpacity}
                                                onPress={() => {
                                                        setRadio(data.id)
                                                    
                                                    
                                                }}
                                            >
                                                {radio === data.id ?
                                                    <Image source={IMAGE.RadioButton_on} style={styles.Image} />
                                                    :
                                                    <Image source={IMAGE.RadioButton_off} style={styles.Image} />}
                                            </TouchableOpacity>
                                            <View>
                                                <Text
                                                >{data.title}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>

                            <CommonTextInput
                                labelText={"Name of the Insured"}
                                placeholder='Enter name'
                                value={values.name}
                                onChangeText={handleChange('name')}
                            />
                            {touched.name && errors.name && (
                                <Text style={styles.error}>
                                    {errors.name}
                                </Text>
                            )}
                            <CommonTextInput
                                labelText={"Family name of the Insured"}
                                placeholder='Enter family name'
                            />
                            {touched.name && errors.name && (
                                <Text style={styles.error}>
                                    {errors.name}
                                </Text>
                            )}
                            <CommonTextInput
                                labelText={"Contact ID"}
                                placeholder='Enter Contact ID'
                                keyboardType="numeric"
                            />
                            {touched.contact && errors.contact && (
                                <Text style={styles.error}>
                                    {errors.contact}
                                </Text>
                            )}
                            <CommonTextInput
                                labelText={"Date of accident"}
                                placeholder='Enter date of accident'
                                keyboardType="numeric"
                            />
                            {touched.Date && errors.Date && (
                                <Text style={styles.error}>
                                    {errors.Date}
                                </Text>
                            )}
                            <CommonTextInput
                                labelText={"Hour of accident"}
                                placeholder='Enter hour of accident'
                                keyboardType="numeric"
                            />
                            {touched.Hour && errors.Hour && (
                                <Text style={styles.error}>
                                    {errors.Hour}
                                </Text>
                            )}
                            <CommonTextInput
                                labelText={"Cause"}
                                placeholder='Write the cause'
                            />
                            {touched.Couse && errors.Couse && (
                                <Text style={styles.error}>
                                    {errors.Couse}
                                </Text>
                            )}
                            <CommonTextInput
                                labelText={"Tangible consequences"}
                                placeholder='Write tangible consequences'
                            />
                            {touched.Tangible && errors.Tangible && (
                                <Text style={styles.error}>
                                    {errors.Tangible}
                                </Text>
                            )}
                            <CommonTextInput
                                labelText={"Comments"}
                                placeholder='Write comments'
                            />
                            {touched.Comment && errors.Comment && (
                                <Text style={styles.error}>
                                    {errors.Comment}
                                </Text>
                            )}
                            <CommonTextInput
                                labelText={"Proof documents"}
                                placeholder='Choose files'
                                icon={IMAGE.document}
                                style={{ height: 13.33, width: 6.67, tintColor: "#AFB1B4" }}
                            />
                            {touched.Proof && errors.Proof && (
                                <Text style={styles.error}>
                                    {errors.Proof}
                                </Text>
                            )}
                            <Buttons
                                btn_text={"Report"}
                                color="#fff"
                                style={{ marginTop: "5%" }}
                                on_press={handleSubmit}
                            />
                        </ScrollView>
                    </View>
                )}
            </Formik>
        </ScrollView>
    )
}

export default ReportDamage

const styles = StyleSheet.create({
    insuranceDurationView: {
        margin: 5,
        marginLeft: 16,
        borderLeftWidth: 1.5,
        paddingLeft: 5,
        borderColor: Colors.primary
    },
    Image: {
        height: 16,
        width: 16,
    },
    TouchableOpacity: {
        height: 20,
        width: 20,
    },
    error: {
        fontSize: 13, color: '#FF0D10',
        paddingHorizontal: "6%",
    }
})