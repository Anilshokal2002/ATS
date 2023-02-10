import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationHeader from '../../Components/NavigationHeader'
import Colors from '../../Constant/Colors'
import CommonTextInput from '../../Components/CommonTextInput'
import Buttons from '../../Components/Button'
import { IMAGE } from '../../Constant/Images'
import Textinput from '../../Components/textInput'
import DatePicker from '../../Components/DatePicker'

const Country =[
  { Language: 'India', },
  { Language: 'French', },
  { Language: 'Italy', },
  { Language: 'Germany', },
  { Language: 'Angola', },
]

const QuotationStep3 = ({ navigation }) => {
  return (
    <View>
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
          <Text style={{ fontSize: 10, position: "absolute" }}>Step 3</Text>
        </View>
      </View>

      <View style={{ margin: 20, marginVertical: 0 }}>
        <CommonTextInput
          labelText={"First name"}
          placeholder="Enter your first name"
        />
        <CommonTextInput
          labelText={"Last name"}
          placeholder="Enter your last name"
        />
        <DatePicker
              labelText={"Date of birth"}
              placeholder='Select date'
            />
        <Textinput
          text={"Select country"}
          datas={Country}
          labelText={"Nationality"}
        />
        <View style={{ alignSelf: "flex-end", }}>
          <Buttons
            btn_text={"Save"}
            color="#FFF"
            style={{ width: 140, }}
          />
        </View>
        <View style={{ marginVertical: 8 }}>
          <Text style={styles.textInfo}>Information about the person 3 insured</Text>
          <Text style={styles.textInfo}>Information about the person 4 insured</Text>
          <Text style={styles.textInfo}>Your Subscriber Account</Text>
        </View>
        <View>
          <Buttons
            btn_text={"Next Step"}
            color={"#FFF"}
            on_press={() => { navigation.navigate("QuotationStep4") }}
          />
        </View>
      </View>

    </View>
  )
}

export default QuotationStep3

const styles = StyleSheet.create({
  textInfo: {
    fontSize: 16,
    lineHeight: 24,
  }
})