import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react'
import { IMAGE } from '../Constant/Images';
import { Flex } from '@react-native-material/core';
import Colors from '../Constant/Colors';

const DrawerButton = ({data,question}) => {
    const [clicked, setClicked] = useState(false);
    return (
        <View style={{Flex:1,borderRadius:8}}>

            <TouchableOpacity
                style={[clicked ? styles.TouchableOpacity : styles.TouchableOpacity2]}
                onPress={() => {
                    setClicked(!clicked);
                }}>
                <View style={{flex:5.5 ,marginRight:"3%",margin:16}}>
                <Text style={{  color:Colors.black,lineHeight:20,fontWeight:"500"}}>{question}</Text>
                </View>
                <View style={{flex:.5 ,alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
                {clicked ? (
                    <Image
                        source={IMAGE.up_arrow}
                        style={styles.updateImage}
                    />
                ) : (
                    <Image
                        source={IMAGE.dune_arrow}
                        style={styles.updateImage}
                    />
                )}
                </View>
            </TouchableOpacity>

            {clicked ? (
                <View style={styles.component}>
                <Image source={IMAGE.Line} style={{width:295,height:2,alignSelf:"center"}}/>
                    <View style={{}}>
                        <Text style={{margin:16}}>
                            {data}
                        </Text>
                    </View>
                </View>) : null}
        </View>
    )
}

export default DrawerButton

const styles = StyleSheet.create({
    TouchableOpacity: {
        width: 327,
        // height: 50,
        borderRadius: 8,
        // borderWidth: 0.5,
        alignSelf: 'center',
        marginTop:8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#FFF",
        borderBottomEndRadius:0,
        borderBottomStartRadius:0

    },
    TouchableOpacity2: {
        width: 327,
        // height: 50,
        borderRadius: 8,
        // borderWidth: 0.5,
        alignSelf: 'center',
        marginTop:8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#EDF0F8"

    },
    updateImage: {
        width: 13.33,
        height:10
    },
    component: {
        // elevation: 5,
        // marginTop: 1,
        // height: 300,
        alignSelf: 'center',
        width: 327,
        backgroundColor: '#fff',
        borderRadius:8,
        borderTopRightRadius:0,
        borderTopLeftRadius:0,

    }
})