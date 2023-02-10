import { StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import NavigationHeader from '../../../Components/NavigationHeader'
import Colors from '../../../Constant/Colors'
import Formula from '../../../Components/Formula'
import { IMAGE } from '../../../Constant/Images'
import FormulaComp from '../../../Components/FormulaComp'


const OurFormulas = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      <NavigationHeader navigation={navigation}
        text={"Our formulas"}
        color={Colors.black}
      />
      <View style={{ flex: 1, }}>
        <Formula
          Source={IMAGE.formula1}
          formulaNumber="FORMULA 1"
          risk={"LOW"}
          // on_press={FormulaOne}
        />
        <Formula
          Source={IMAGE.formula1}
          formulaNumber="FORMULA 2"
          risk={"MEDIUM"}
        />
        <Formula
          Source={IMAGE.formula1}
          formulaNumber="FORMULA 3"
          risk={"HIGH"}
        />
        
      </View>
    </View>
  )
}

export default OurFormulas

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
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
  buttonClose: {
    backgroundColor: '#2196F3',
},
textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
},
});
