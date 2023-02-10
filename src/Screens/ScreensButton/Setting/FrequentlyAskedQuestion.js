import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState ,useRef} from 'react'
import NavigationHeader from '../../../Components/NavigationHeader'
import Colors from '../../../Constant/Colors'
import DrawerButton from '../../../Components/DrawerButton'

const FrequentlyAskedQuestion = ({navigation}) => {
    const [clicked, setClicked] = useState(false);
    return (
        <View>
            <NavigationHeader  navigation={navigation}
                text={"Frequently asked question"}
                color={Colors.black}
            />
            <View style={{borderRadius:8}}>
            <DrawerButton
                question={"How to subscribe ?"}
                data={"Secure subscription 100% online and directly on the website"}
            />
            <DrawerButton
                question={"Why is it mention country of departure and country of arrival in the subscription?"}
            />
            <DrawerButton
                question={"Are helicopter, winching and track rescue costs covered?"}
            />
            <DrawerButton
                question={"Is an annual contract tacitly renewed ?"}
            />
            <DrawerButton
                question={"Off-road skiing is often covered under certain conditions, what about with Assure Ton Sport ?"}
            />
            <DrawerButton
                question={"How to make an accident report?"}
            />
            <DrawerButton
                question={"Who is your support provider?"}
            />
            </View>
        </View>
    )
}

export default FrequentlyAskedQuestion

const styles = StyleSheet.create({
    TouchableOpacity: {
        width: 327,
        height: 50,
        borderRadius: 10,
        // borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#fff"
    },
    updateImage: {
        width: 20,
        height: 20
    },
    component: {
        elevation: 5,
        // marginTop: 10,
        // height: 300,
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
}
})