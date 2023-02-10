import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavigationHeader from '../../Components/NavigationHeader'
import Colors from '../../Constant/Colors'
import CommonTextInput from '../../Components/CommonTextInput'
import Buttons from '../../Components/Button'
import { IMAGE } from '../../Constant/Images'
import Textinput from '../../Components/textInput'
import DatePicker from '../../Components/DatePicker'



const area = [
  { Language: 'jaipur', },
  { Language: 'jaipur', },
  { Language: 'jaipur', },
  { Language: 'jaipur', },
  { Language: 'jaipur', },
  { Language: 'jaipur', },
]
const Country = [
  { Language: 'India', },
  { Language: 'French', },
  { Language: 'Italy', },
  { Language: 'Germany', },
  { Language: 'Angola', },
]

const QuotationStep2 = ({ navigation }) => {
  const [color,setColor]=useState(true)
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 5 }}>
            <NavigationHeader
              navigation={navigation}
              text={"ONLINE QUOTATION"}
              color={Colors.primary}
            />
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", margin: "5%" }}>
            <Image source={IMAGE.RectangleStep} style={{ width: 46, height: 24, }} />
            <Text style={{ fontSize: 10, position: "absolute" }}>Step 2</Text>
          </View>
        </View>
        <View>
          <CommonTextInput
            labelText={"Number of people to insure"}
            placeholder="Enter number"
          />
          <View>
            <View style={styles.textComponent}>
              <Text style={{ color: Colors.black }}>Insurance duration<Text style={{ color: "red" }}>*</Text></Text>
            </View>
            <View style={styles.buttonComponent}>
              <Buttons
                style={[styles.button , color ? {backgroundColor:Colors.primary} : {backgroundColor:"#FFF"}]}
                color= {color?"#FFF":Colors.primary}
                btn_text={"Per Day"}
                on_press ={()=>{setColor(true)}}
              />
              <Buttons
                style={[styles.button , color ? {backgroundColor:"#FFF"} : {backgroundColor:Colors.primary}]}
                btn_text={"Per Year"}
                color= {color?Colors.primary:"#FFF"}
                on_press ={()=>{setColor(false)}}
              />
            </View>

          </View>

          <View>
            <Textinput
              text={"Select your Geographical area"}
              datas={area}
              labelText={"Geographical area"}
            />
            <Textinput
              text={"Select your Departure country"}
              datas={Country}
              labelText={"Departure country"}
            />
            <DatePicker
              labelText={"Starting date"}
              placeholder='Select date'
            />
            <DatePicker
              labelText={"Ending date"}
              placeholder='Select date'
            />
          </View>

        </View>
      </View>

      <View style={{ flex: 1, marginTop: "50%" }}>
        <Buttons
          btn_text={"Next Step"}
          color={"#fff"}
          on_press={() => { navigation.navigate("QuotationStep3") }}
        />
      </View>

    </View>

  )
}

export default QuotationStep2

const styles = StyleSheet.create({
  textComponent: {
    margin: 5,
    marginLeft: 16,
    borderLeftWidth: 1.5,
    paddingLeft: 5,
    borderColor: Colors.primary
  },
  buttonComponent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: 156,
    height: 46,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: Colors.primary
  },
})