import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavigationHeader from '../../Components/NavigationHeader'
import Colors from '../../Constant/Colors'
import { IMAGE } from '../../Constant/Images'
import RadioButton from '../../Components/RadioButton'
import Buttons from '../../Components/Button'
import FormulaStep4Component from '../../Components/formulaStep4Component'
import { TouchableOpacity } from 'react-native'
import CheckBox from '../../Components/CheckBox'


const QuotationStep4 = ({navigation}) => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
>
    <View style={{flex:1}}>
      <View style={{ flexDirection: "row" }}>
      <View style={{flex:5}}>
        <NavigationHeader
          navigation={navigation}
          text={"ONLINE QUOTATION"}
          color={Colors.primary}
        />
        </View>
        <View style={{flex:1,justifyContent:"center",alignItems:"center",margin:"5%"}}>
          <Image source={IMAGE.RectangleStep} style={{ width: 46, height: 24,  }} />
          <Text style={{fontSize:10,position:"absolute"}}>Step 4</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 16, color: Colors.black, lineHeight: 24 }}>
            Select a Formula
          </Text>
        </View>
        <View>
          <FormulaStep4Component
            formula_number={"1"}
            src={IMAGE.formula1}
            risk={"LOW"}
            Amount={"12.4"}
          />
          <FormulaStep4Component
            formula_number={"2"}
            src={IMAGE.formula2}
            risk={"MEDIUM"}
            Amount={"39"}
          />
          <FormulaStep4Component
            formula_number={"3"}
            src={IMAGE.formula3}
            risk={"HIGH"}
            Amount={"62"}
          />
        </View>
        <View style={{}}>
          <CheckBox
            btn_text={"Need Bagage ( €4.4 Per day )"}
          />
          <CheckBox
            btn_text={"Cancellation for any type of accident? ( €2 Per day ) "}
          />
        </View>
        <Buttons
          btn_text={"Select formula"}
          color="#FFF"
          style={{ backgroundColor: Colors.primary }}
          on_press={() => { navigation.navigate("QuotationStep5") }}
        />
      </View>
    </View>
    </ScrollView>
  )
}

export default QuotationStep4

const styles = StyleSheet.create({
  container: {
    marginHorizontal:"4%",
  }
})