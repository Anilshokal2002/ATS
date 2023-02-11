import { StyleSheet, Text, View, Image, CheckBox, Form, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { IMAGE } from '../Constant/Images'
import { ScrollView } from 'react-native'
import CommonTextInput from '../Components/CommonTextInput'
import { TouchableOpacity } from 'react-native'
import Buttons from '../Components/Button'
import { Formik } from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native'

const Login = ({ navigation }) => {
  const [hidepassword, setHidepassword] = useState(false)
  const [isSelected, setSelection] = useState(false);
const [email ,setEmail]=useState("")
const[password,setPassword] =useState("")
const [message, setMessage] = useState("")
const handleLogin = async ()=>{
  try {
    if(email.length >0 && password.length >0 ){
      const isUserCreated = await auth().createUserWithEmailAndPassword(
        email,
        password,
        )
        setMessage("")
      console.log(">>>>>>",isUserCreated);
      navigation.dispatch(StackActions.replace("Home"))
    } else {
      Alert.alert("Please enter required data")
    }

  } catch (error) {
    setMessage(error.message);
  }
}

  return (
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
                value={email}
                onChangeText={value=>setEmail(value)}
              />
              <Text style={styles.label}>Password</Text>
              <CommonTextInput
                value={password}
                onChangeText={value=>setPassword(value)}
                placeholder='Enter your Password'
                icon={IMAGE.Lock}
                style={{ height: 14.4, width: 11.4, }}
                secureTextEntry={hidepassword}
                onPress={() => { setHidepassword(!hidepassword) }}
                passwordIcon={(hidepassword) ? require('../assets/images/visibility.png') : require('../assets/images/visibility_off.png')}
              />
              <Text style={styles.error}>
                  {message}
                </Text>
              <TouchableOpacity style={[styles.forgotTouchable, { alignSelf: "flex-end" }]} >
                <Text style={styles.forgotPassword} >Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <Buttons
                btn_text={'Continue'}
                on_press={handleLogin}
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
    // marginVertical:"6%"
  }
})