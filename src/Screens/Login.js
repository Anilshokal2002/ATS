import { StyleSheet, Text, View, Image, CheckBox, Form } from 'react-native'
import React, { useState, useEffect } from 'react'
import { IMAGE } from '../Constant/Images'
import { ScrollView } from 'react-native'
import CommonTextInput from '../Components/CommonTextInput'
import { TouchableOpacity } from 'react-native'
import Buttons from '../Components/Button'
import { Formik } from 'formik';
import * as yup from 'yup';


const Login = ({ navigation }) => {
  const [hidepassword, setHidepassword] = useState(true)
  const [isSelected, setSelection] = useState(false);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      // onSubmit={values => (JSON.stringify(values))}
      onSubmit={() => { navigation.navigate("Tab") }}
      validationSchema={yup.object().shape({
        email: yup.string().email().required('Please,Provide your email!'),
        password: yup.string().min(4).required('Please,Provide your password!'),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
      }) => (
        <ScrollView style={{}}>
          <View>
            <View>
              <Text style={styles.welcome}>Welcome back <Image source={IMAGE.heart_eye} style={styles.hearteye} /> </Text>
              <Text style={styles.entryText}>Please enter your account details below.</Text>
            </View>
            <View style={styles.labelView}>
              <Text style={styles.label}>E-mail</Text>
              <CommonTextInput
                placeholder='Enter your Mail address'
                icon={IMAGE.Mail}
                style={{ height: 12, width: 16.2, }}
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>
                  {errors.email}
                </Text>
              )}
              <Text style={styles.label}>Password</Text>
              <CommonTextInput
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder='Enter your Password'
                icon={IMAGE.Lock}
                style={{ height: 14.4, width: 11.4, }}
                secureTextEntry={hidepassword}
                onPress={() => { setHidepassword(!hidepassword) }}
                passwordIcon={(hidepassword) ? require('../assets/images/visibility.png') : require('../assets/images/visibility_off.png')}
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>
                  {errors.password}
                </Text>
              )}
              <TouchableOpacity style={[styles.forgotTouchable, { alignSelf: "flex-end" }]} >
                <Text style={styles.forgotPassword} >Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <Buttons
                btn_text={'Continue'}
                on_press={handleSubmit}
              />
              <Buttons
                btn_text={'Get Online Quote'}
                on_press={
                  () => { navigation.navigate("GetOnlineQuota") }}
                style={{ backgroundColor: "#F0C551" }}
              />
            </View>
            <View>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  )
}

export default Login

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    color: "#000E32",
    padding: 10,
    fontWeight: "700",
  },
  entryText: {
    color: "#797D85",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "400",
    padding: 10,
    paddingTop: 0,

  },
  label: {
    fontSize: 20,
    paddingLeft: 10,
    marginHorizontal: 10,
    borderLeftWidth: 2,
    borderLeftColor: "#2B7FFE",
    color: "#797D85"
  },
  heart_eye: {
    height: 20,
    width: 20
  },
  labelView: {

  },
  forgotPassword: {
    fontSize: 17,
    fontFamily: 'OpenSans-SemiBold',
    color: '#2B7FFE',
    paddingTop: 20,
    alignSelf: "flex-end",
    textDecorationLine: "underline"
  },
  forgotTouchable: {
    width: 327,
    marginBottom: 15,
    marginRight: 20
  },
  checkbox: {
    // alignSelf: 'center',
    height: 20,
    width: 20,
    backgroundColor: "red",

  },
  error: {
    fontSize: 13, color: '#FF0D10',
    paddingHorizontal: "6%",
  }
})