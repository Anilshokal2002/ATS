import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import React from 'react'
import NavigationHeader from '../../Components/NavigationHeader'
import Colors from '../../Constant/Colors'
import CommonTextInput from '../../Components/CommonTextInput'
import Buttons from '../../Components/Button'
import { Formik } from 'formik';
import * as yup from 'yup';

const ClubRegistration = ({ navigation }) => {
    return (
        <Formik
            initialValues={{
                Proof: "",
                Firstname: '',
                Lastname: "",
                contact: "",
                email: "",
                Address: "",
                City: "",
                Sports: "",
                ZipCity:"",
            }}
            // onSubmit={values =>Alert. alert(JSON.stringify(values))}
            onSubmit={() => { navigation.navigate("Home") }}
            validationSchema={yup.object().shape({
                Firstname: yup.string().required('Please,Provide your First name!'),
                Lastname: yup.string().required('Please,Provide your Last name!'),
                contact: yup.number().required('Please,Provide your contact!'),
                ZipCity: yup.number().required('Please,Provide your ZipCity!'),
                email: yup.string().email().required('Please,Provide your email!'),
                City: yup.string().required('Please,Provide the  City!'),
                Sports: yup.string().required('Please,Provide the  Sports!'),
                Address: yup.string().required('Please,Provide the Address!'),
                Proof: yup.string().required('Please,Provide the Legal form!'),
            })}>
            {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                handleSubmit,
            }) => (
                <View style={{}}>
                    <View>
                        <NavigationHeader navigation={navigation}
                            text={"CLUB REGISTRY"}
                            color={Colors.primary}
                            on_press={() => { navigation.navigate("Home") }}
                        />
                    </View>
                    <ScrollView style={{ margin: "2%", marginBottom: "10%" }}>
                        <CommonTextInput
                            value={values.Proof}
                            onChangeText={handleChange('Proof')}
                            labelText={"Legal Form"}
                            placeholder="Assosiation,sarl,eurl,sas... "
                        />
                        {touched.Proof && errors.Proof && (
                            <Text style={styles.error}>
                                {errors.Proof}
                            </Text>
                        )}
                        <CommonTextInput
                            value={values.Sports}
                            onChangeText={handleChange('Sports')}
                            labelText={"Sports practice"}
                            placeholder="Motocross, enduro"
                        />
                        {touched.Sports && errors.Sports && (
                            <Text style={styles.error}>
                                {errors.Sports}
                            </Text>
                        )}
                        <CommonTextInput
                            value={values.Firstname}
                            onChangeText={handleChange('Firstname')}
                            labelText={"First name of the legal representative"}
                            placeholder="First name"
                        />
                        {touched.Firstname && errors.Firstname && (
                            <Text style={styles.error}>
                                {errors.Firstname}
                            </Text>
                        )}
                        <CommonTextInput
                            value={values.Lastname}
                            onChangeText={handleChange('Lastname')}
                            labelText={"Last name of the legal representative"}
                            placeholder="Last name"
                        />
                        {touched.Lastname && errors.Lastname && (
                            <Text style={styles.error}>
                                {errors.Lastname}
                            </Text>
                        )}
                        <CommonTextInput
                            value={values.Address}
                            onChangeText={handleChange('Address')}
                            labelText={"Address"}
                            placeholder="Address"
                        />
                        {touched.Address && errors.Address && (
                            <Text style={styles.error}>
                                {errors.Address}
                            </Text>
                        )}
                        <CommonTextInput
                            value={values.City}
                            onChangeText={handleChange('City')}
                            labelText={"City"}
                            placeholder="City"
                        />
                        {touched.City && errors.City && (
                            <Text style={styles.error}>
                                {errors.City}
                            </Text>
                        )}
                        <CommonTextInput
                            value={values.ZipCity}
                            onChangeText={handleChange('ZipCity')}
                            labelText={"Zip City"}
                            placeholder="City"
                        />
                        {touched.ZipCity && errors.ZipCity && (
                            <Text style={styles.error}>
                                {errors.City}
                            </Text>
                        )}
                        <CommonTextInput
                            value={values.email}
                            onChangeText={handleChange('email')}
                            labelText={"E-mail"}
                            placeholder="Mail address"
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.error}>
                                {errors.email}
                            </Text>
                        )}
                        <CommonTextInput
                            value={values.contact}
                            onChangeText={handleChange('contact')}
                            labelText={"Phone number"}
                            placeholder="Phone number"
                            keyboardType='numeric'
                        />
                        {touched.contact && errors.contact && (
                            <Text style={styles.error}>
                                {errors.contact}
                            </Text>
                        )}
                        <View>
                            <Buttons
                                btn_text={"Register"}
                                color="#fff"
                                style={{ marginBottom: "10%", marginTop: "5%" }}
                                on_press={handleSubmit}
                            />
                        </View>
                    </ScrollView>
                </View>
            )}
        </Formik>
    )
}

export default ClubRegistration

const styles = StyleSheet.create({
    error: {
        fontSize: 13, color: '#FF0D10',
        paddingHorizontal: "6%",
    }
})