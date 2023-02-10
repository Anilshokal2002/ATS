import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import { IMAGE } from '../Constant/Images';
import Colors from '../Constant/Colors';
// import { IMAGE } from '../Constant/Images';

const ModalComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
            <View style={styles.centeredView}>
                <Modal
                    // animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ backgroundColor: Colors.primary, }}>
                                <View style={[styles.item, { backgroundColor: Colors.primary, borderBottomWidth: 1, borderColor: "#FFF", borderBottomEndRadius: 0, borderBottomStartRadius: 0 }]}>
                                    <Text style={[styles.title, { color: "#FFF" }]}>{item.title1}</Text>
                                    <Text style={[styles.title, { color: "#FFF" }]}>{item.title2}</Text>
                                    <Text style={[styles.title, { color: "#FFF" }]}>{item.title3}</Text>
                                    <Text style={[styles.title, { color: "#FFF" }]}>{item.title4}</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={styles.modalTextComponent}>Sport:Speed Superbike</Text>
                                    <Text style={styles.modalTextComponent}>Formula:Formula 2</Text>
                                    <Text style={styles.modalTextComponent}>Option:None</Text>
                                    <Text style={styles.modalTextComponent}>Destination:Andorra</Text>
                                    <Text style={styles.modalTextComponent}>Coverage Period:6 days</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: "red", justifyContent: "center" }}>
                                <TouchableOpacity >
                                    <View style={styles.modalButton}>
                                        <Image source={IMAGE.Subscribe} />
                                        <Text>Subscribe</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <View style={styles.modalButton}>
                                        <Image source={IMAGE.edit} />
                                        <Text>Modify</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <View style={styles.modalButton}>
                                        <Image source={IMAGE.file_download} />
                                        <Text>Download</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
    )
}

export default ModalComponent

const styles = StyleSheet.create({
    item: {
        height: 48,
        width: 327,
        borderRadius: 8,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 2,
        padding: 10
    },
    title: {
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 12,
        lineHeight: 16,
        color: Colors.black
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: "22%",
        // width:327,
        alignSelf: "center",
        // borderRadius:12
    },
    modalView: {
        // alignSelf: "center",
        // margin: 20,
        // marginTop:0,
        backgroundColor: 'white',
        // borderRadius: 12,
        // padding: 35,
        // paddingTop: 0,
        // alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        elevation: 5,
        width: 327
    },
    button: {
        borderRadius: 12,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalTextComponent: {
        Colors: "#FFF",
        // fontSize:20
    },
    modalButton:{
        margin:6,
        width:295,
        justifyContent:"center",
        borderRadius:8,
        flexDirection:"row",
        alignSelf:"flex-start"
    }
})