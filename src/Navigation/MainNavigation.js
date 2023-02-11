
import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import Login from '../Screens/Login';
import GetOnlineQuota from '../Screens/GetOnlineQuota';
import TabNavigation from './TabNavigation';
import Estimations from '../Screens/ScreensButton/Estimations';
import Contracts from '../Screens/ScreensButton/Contracts';
import QuotationStep1 from '../Screens/OnlineQuotation/QuotationStep1';
import QuotationStep2 from '../Screens/OnlineQuotation/QuotationStep2';
import QuotationStep3 from '../Screens/OnlineQuotation/QuotationStep3';
import QuotationStep4 from '../Screens/OnlineQuotation/QuotationStep4';
import QuotationStep5 from '../Screens/OnlineQuotation/QuotationStep5';
import ClubRegistration from '../Screens/ScreensButton/ClubRegistration';
import ReportDamage from '../Screens/ScreensButton/ReportDamage';
import Setting from '../Screens/ScreensButton/Setting';
import EditAccount from '../Screens/ScreensButton/Setting/EditAccount';
import OurFormulas from '../Screens/ScreensButton/Setting/OurFormulas';
import SportsList from '../Screens/ScreensButton/Setting/SportsList';
import TermsAndConditions from '../Screens/ScreensButton/Setting/TermsAndConditions';
import FrequentlyAskedQuestion from '../Screens/ScreensButton/Setting/FrequentlyAskedQuestion';
import CustomContactForm from '../Screens/ScreensButton/CustomContactForm';
import AccountInfo from '../Screens/ScreensButton/AccountInfo';
import ChangePassword from '../Screens/ScreensButton/Setting/ChangePassword';
import Home from '../Screens/Tabes/Home';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}
                initialRouteName='OnboardingScreen'
                >
                <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name='Tab' component={TabNavigation} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name='GetOnlineQuota' component={GetOnlineQuota} />
                <Stack.Screen name='QuotationStep1' component={QuotationStep1} />
                <Stack.Screen name='QuotationStep2' component={QuotationStep2} />
                <Stack.Screen name='QuotationStep3' component={QuotationStep3} />
                <Stack.Screen name='QuotationStep4' component={QuotationStep4} />
                <Stack.Screen name='QuotationStep5' component={QuotationStep5} />
                <Stack.Screen name='Estimations' component={Estimations} />
                <Stack.Screen name='Contracts' component={Contracts} />
                <Stack.Screen name='ClubRegistration' component={ClubRegistration} />
                <Stack.Screen name='ReportDamage' component={ReportDamage} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="EditAccount" component={EditAccount} />
                <Stack.Screen name="OurFormulas" component={OurFormulas} />
                <Stack.Screen name="SportsList" component={SportsList} />
                <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} />
                <Stack.Screen name='FrequentlyAskedQuestion' component={FrequentlyAskedQuestion} />
                <Stack.Screen name='CustomContactForm' component={CustomContactForm} />
                <Stack.Screen name='AccountInfo' component={AccountInfo} />
                <Stack.Screen name='ChangePassword' component={ChangePassword} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
