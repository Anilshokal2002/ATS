import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainNavigation from './src/Navigation/MainNavigation'
import SplashScreen from 'react-native-splash-screen';
// import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

const App = () => {
  // const [myData , setMyDate] =useState(null)
  useEffect(() => {
    SplashScreen.hide()
    // getDatabase()
    // getDatabase()
  }, [])

  // const getDatabase = async () => {
  //   try {
  //     const data = await database().ref("users/1").once("value")
  //     console.log("--------", data);
  //     setMyDate(data.val())
  //   } catch (err) {
  //     console.log("+++++++", err)
  //   }
  // }

    // const getDatabase = async () => {
  //   try {
  //     const data = await firestore().collection("testing").doc("7QlAUTnG0NfhmA2MIUEd").get()
  //     console.log(">>>>>>>>>", data._data);

  //   } catch (err) {
  //     console.log("+++++++", err)
  //   }
  // }

  return (
    <MainNavigation />
    // <View>
    //   <Text>Name : {myData? myData.name :"Loading..."}</Text>
    //   <Text>age : {myData? myData.age :"Loading..."}</Text>
    // </View>
  )
}

export default App