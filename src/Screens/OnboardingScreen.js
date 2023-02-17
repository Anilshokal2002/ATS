import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    StatusBar,
    TextInput,
    ScrollView,
} from 'react-native';
import Buttons from '../Components/Button';
import Textinput from '../Components/textInput';
import { IMAGE } from '../Constant/Images';
import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';

const countries = [
    { Language: 'English', },
    { Language: 'Hindi', },
    { Language: 'French', },
    { Language: 'Italy', },
    { Language: 'German', },
    { Language: 'Angola', },
]

const OnboardingScreen = ({ navigation }) => {

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            const routeName =user!==null?"Tab":"Login"
            navigation.navigate(routeName)
        })
    }, [])

    return (
        <ScrollView style={styles.main}>
            <View style={styles.main}>
                <StatusBar barStyle="dark-content" backgroundColor="#f3f3f3" />
                <View style={styles.container}>
                    <View style={{}}>
                        <Image
                            style={styles.image}
                            source={IMAGE.MAskGroup}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>
                            PRACTICE YOUR SPORTS{'\n'}SAFELY ALL OVER{'\n'}THE WORLD!
                        </Text>
                    </View>
                    <View>
                        <View>
                            <Textinput
                                text={"Select Language"}
                                datas={countries}
                            />
                        </View>
                    </View>
                    <View style={{}}>
                        <Buttons
                            btn_text={'Log In'}
                            // on_press={handleSubmit}
                            on_press={() => { navigation.navigate("Login") }}
                        />
                        <Buttons
                            btn_text={'Get Online Quote'}
                            on_press={() => { navigation.navigate("GetOnlineQuota") }}
                            style={{ backgroundColor: "#F0C551" }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    upView: {},
    image: {
        height: 346,
        width:"90%",
        borderRadius: 12,
        marginTop: 24,
        alignSelf:"center"
    },
    text: {
        fontSize: 24,
        fontWeight: '700',
        paddingTop: 10,
        color: '#000000',
        lineHeight: 34,
        color: "#000E32",
        fontFamily: "Helvetica Now Display"
    },

});
