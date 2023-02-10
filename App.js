import { View, Text } from 'react-native'
import React ,{useEffect}from 'react'
import MainNavigation from './src/Navigation/MainNavigation'
import SplashScreen from 'react-native-splash-screen';
import OnboardingScreen from './src/Screens/OnboardingScreen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
}, [])
  return (
      <MainNavigation />
      // <OnboardingScreen/>
      // <View>
      //   <Text>edfssfds</Text>
      // </View>
    
  )
}

export default App