import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Constant/Colors';
import { IMAGE } from '../Constant/Images';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title1: 'ATS-60464',
        title2: '22-11-22',
        title3: '22-11-22',
        title4: '€188.8',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title1: 'ATS-60464',
        title2: '22-11-22',
        title3: '22-11-22',
        title4: '€188.8',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title1: 'ATS-60464',
        title2: '22-11-22',
        title3: '22-11-22',
        title4: '€188.8',
    },

];
const Item = ({ item, onPress, textColor }) => (
    // <TouchableOpacity >
    <View style={[styles.item,]}>
        <Text style={[styles.title,]}>{item.title1}</Text>
        <Text style={[styles.title,]}>{item.title2}</Text>
        <Text style={[styles.title,]}>{item.title3}</Text>
        <Text style={[styles.title,]}>{item.title4}</Text>
    </View>
    // </TouchableOpacity>
);
const DataItem = () => {
    const [selectedId, setSelectedId] = useState()
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }) => {
        return (
            <View>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{ backgroundColor: Colors.primary, borderTopRightRadius:12,borderTopLeftRadius:12}}>
                                    <View style={[styles.item, { backgroundColor: Colors.primary, borderBottomWidth: 1, borderColor: "#FFF", borderBottomEndRadius: 0, borderBottomStartRadius: 0 ,}]}>
                                        <Text style={[styles.title, { color: "#FFF" }]}>{item.title1}</Text>
                                        <Text style={[styles.title, { color: "#FFF" }]}>{item.title2}</Text>
                                        <Text style={[styles.title, { color: "#FFF" }]}>{item.title3}</Text>
                                        <Text style={[styles.title, { color: "#FFF" }]}>{item.title4}</Text>
                                    </View>
                                    <View style={{margin:10}}>
                                        <Text style={styles.modalTextComponent}>Sport:Speed Superbike</Text>
                                        <Text style={styles.modalTextComponent}>Formula:Formula 2</Text>
                                        <Text style={styles.modalTextComponent}>Option:None</Text>
                                        <Text style={styles.modalTextComponent}>Destination:Andorra</Text>
                                        <Text style={styles.modalTextComponent}>Coverage Period:6 days</Text>
                                    </View>
                                </View>
                                <View style={{ }}>
                                    <TouchableOpacity style={styles.modalTouchable}>
                                        <View style={styles.modalButton}>
                                            <Image source={IMAGE.Subscribe} style={styles.modalImage}/>
                                            <Text style={styles.iconText}>Subscribe</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.modalTouchable}>
                                        <View style={styles.modalButton} >
                                            <Image source={IMAGE.edit} style={styles.modalImage}/>
                                            <Text style={styles.iconText}>Modify</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.modalTouchable}>
                                        <View style={styles.modalButton}>
                                            <Image source={IMAGE.file_download} style={styles.modalImage}/>
                                            <Text style={styles.iconText}>Download</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    style={[ styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                >
                    <Item
                        item={item}
                        onPress={() => setSelectedId(item.id)}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={setSelectedId}
            />
        </SafeAreaView>
    )

}
export default DataItem

const styles = StyleSheet.create({
    item: {
        height: 48,
        // width: 327,
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
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 12,
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
        margin:20,
    },
    textStyle: {
        color:Colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight:20
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalTextComponent: {
        color:"#FFF",
        fontSize:12,
        lineHeight:16,
        fontWeight:"500"
    },
    modalButton:{
        justifyContent:"center",
        borderRadius:8,
        flexDirection:"row",
        alignSelf:"flex-start",
        marginStart:20,
        margin:14
    },
    modalImage:{
        height:20,
        width:20,
        alignSelf:"center"
    },
    modalTouchable:{
        backgroundColor:"#F2F6FE",
        width:295,
        height:48,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        margin:12,
        marginBottom:0
    },
    iconText:{
        lineHeight:20,
        paddingStart:3
    }

})