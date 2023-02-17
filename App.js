import React, { useEffect, useState } from 'react'
import MainNavigation from './src/Navigation/MainNavigation'
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <MainNavigation />
  )
}
export default App