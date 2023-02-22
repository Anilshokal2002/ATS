import React, { useEffect, useState ,Fragment } from 'react'
import MainNavigation from './src/Navigation/MainNavigation'
import SplashScreen from 'react-native-splash-screen';
import { fcmService } from './src/notification/fcmservice';

const App = () => {
  useEffect(() => {
    fcmService.register()
    SplashScreen.hide()
  }, [])
  
  return (
    <MainNavigation />
  )
}
export default App