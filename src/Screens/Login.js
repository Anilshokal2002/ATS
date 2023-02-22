import { StyleSheet, Text, View, Image, CheckBox, Form, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { IMAGE } from '../Constant/Images'
import { ScrollView } from 'react-native'
import CommonTextInput from '../Components/CommonTextInput'
import { TouchableOpacity } from 'react-native'
import Buttons from '../Components/Button'
import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native'
import { LoginManager, GraphRequest, GraphRequestManager, AccessToken } from 'react-native-fbsdk'
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
const Login = ({ navigation }) => {
  const [hidepassword, setHidepassword] = useState(true)
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loggedIn, setloggedIn] = useState(true);
  const [userInfo, setuserInfo] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "175850794070-1ai3v7a5vodg8qn9gkrficmf8os8nk17.apps.googleusercontent.com",
    });
  }, []);


  const _signIn = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  async function FbSignIn() {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
        "user_friends"
      ]);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      return auth().signInWithCredential(facebookCredential);
  }

  const handleLogin = async ({ navigation }) => {
    try {
      if (email.length > 0 && password.length > 0) {
        const isUserCreated = await auth().createUserWithEmailAndPassword(
          email,
          password,
        )
        setMessage(""),
          navigation.navigate("Tab"), {
          email: isUserCreated.user.email,
          uid: isUserCreated.user.uid,
        }
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
          <Text style={styles.welcome}>Welcome back <Image source={IMAGE.heart_eye} style={styles.heart_eye} /> </Text>
          <Text style={styles.entryText}>Please enter your account details below.</Text>
        </View>
        <View style={styles.labelView}>
          <Text style={styles.label}>E-mail</Text>
          <CommonTextInput
            placeholder='Enter your Mail address'
            icon={IMAGE.Mail}
            style={{ height: 12, width: 16.2, }}
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Text style={styles.label}>Password</Text>
          <CommonTextInput
            value={password}
            onChangeText={value => setPassword(value)}
            placeholder='Enter your Password'
            icon={IMAGE.Lock}
            style={{ height: 14.4, width: 11.4, }}
            secureTextEntry={hidepassword}
            onPress={() => { setHidepassword(!hidepassword) }}
            passwordIcon={(hidepassword) ? require('../assets/images/visibility_off.png') : require('../assets/images/visibility.png')}
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
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop: "8.5%" }}>
          <TouchableOpacity
            onPress={() => console.log("google login")}
            style={styles.social_btn} >
            <Image style={styles.social_img} source={IMAGE.apple} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={_signIn}
            style={styles.social_btn} >
            <Image style={styles.social_img} source={IMAGE.Google} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={FbSignIn}
            style={styles.social_btn} >
            <Image style={styles.social_img} source={IMAGE.facebook} />
          </TouchableOpacity>
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
    fontSize: 16,
    paddingLeft: 10,
    marginHorizontal: 10,
    borderLeftWidth: 2,
    borderLeftColor: "#2B7FFE",
    color: "#797D85"
  },
  heart_eye: {
    height: 25,
    width: 25
  },
  forgotPassword: {
    fontSize: 17,
    fontFamily: 'OpenSans-SemiBold',
    color: '#2B7FFE',
    paddingVertical: 10,
    alignSelf: "flex-end",
    textDecorationLine: "underline"
  },
  forgotTouchable: {
    paddingRight: 20
  },
  checkbox: {
    height: 20,
    width: 20,
    backgroundColor: "red",
  },
  error: {
    fontSize: 13, color: '#FF0D10',
    paddingHorizontal: "6%",
  },
  social_img: {
    width: 35,
    height: 35,
    marginLeft: 15
  }
})