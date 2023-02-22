import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../Constant/Colors'
import CommonTextInput from '../../../Components/CommonTextInput'
import CheckBox from '../../../Components/CheckBox'
import Buttons from '../../../Components/Button'
import { Formik } from 'formik';
import * as yup from 'yup';
const ChangePassword = ({ navigation }) => {

    return (
        <Formik
            initialValues={{
                Newpassword: '',
                confirmpassword: "",
            }}
            // onSubmit={values => alert(JSON.stringify(values))}
            onSubmit={() => { navigation.navigate("Setting") }}
            validationSchema={yup.object().shape({
                Newpassword: yup.string().min(4).required('Please,Provide your password!'),
                confirmpassword: yup.string().min(4).required('Please,Provide your password!'),
            })}>
            {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                handleSubmit,
            }) => (
                <View style={styles.main}>
                    <View style={{margin:"4%"}}>
                        <Text style={styles.changeText}>Create a password</Text>
                        <Text style={styles.Text}>Please create a new password to secure your account.</Text>
                    </View>
                    <View style={{ margin: "0%" }}>
                        <CommonTextInput
                            labelText={"New password"}
                            placeholder="Enter new password"
                            value={values.Newpassword}
                            onChangeText={handleChange('Newpassword')}
                        />
                        {touched.Newpassword && errors.Newpassword && (
                            <Text style={styles.error}>
                                {errors.Newpassword}
                            </Text>
                        )}
                        <CommonTextInput
                            labelText={"Confirm password"}
                            placeholder="Enter new password again"
                            value={values.confirmpassword}
                            onChangeText={handleChange('confirmpassword')}
                        />
                        {touched.confirmpassword && errors.confirmpassword && (
                            <Text style={styles.error}>
                                {errors.confirmpassword}
                            </Text>
                        )}
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.CheckBox}>
                            <CheckBox
                            />
                            <Text>Remember me</Text>
                        </View>
                        <View>
                        <Buttons
                            btn_text={"Confirm"}
                            color={"#FFF"}
                            on_press={handleSubmit}
                        />
                        </View>
                    </View>
                </View>
            )}
        </Formik>

    )
}

export default ChangePassword

const styles = StyleSheet.create({
    main: {
    },
    changeText: {
        color: Colors.black,
        fontSize: 24,
    },
    Text: {
        fontSize: 16,
        lineHeight: 17,
        paddingEnd: "20%",
        marginVertical: "1%"
    },
    CheckBox: {
        flexDirection: "row",
        alignItems: "center",
        margin:"4%"
    },
    footer: {
        // marginVertical: "10%"
    },
    error: {
        fontSize: 13, color: '#FF0D10',
        paddingHorizontal: "3%",
    }
})