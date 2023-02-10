import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import NavigationHeader from '../../Components/NavigationHeader'
// import { Colors } from 'react-native/Libraries/NewAppScreen'
import Colors from "../../Constant/Colors"
import StepOnlineQuots from '../../Components/StepOnlineQuots'
import Buttons from '../../Components/Button'


const OnlineQuotation = ({ navigation }) => {
  return (
    <View>
      <View style={styles.main}>
        <View style={{ flexDirection: "row", alignItems: "center",}}>
          <View style={{  flexDirection: "row", alignItems: "center", }}>
            <Text style={[styles.text,]}>GET ONLINE QUOTA</Text>
          </View>
        </View>
      </View>
      <View style={styles.stepBox}>
        <View style={{ margin: 24, width: "90%" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ alignItems: "center", color: Colors.primary }}>// ONLINE QUOTATION</Text>
          </View>
          <StepOnlineQuots
            number={"1"}
            step={"Step 1"}
            text={"Select your sport"}
            style={{ marginTop: 15 }}
            lineHeight
          />
          <StepOnlineQuots
            number={"2"}
            step={"Step 2"}
            text={"General information"}
            lineHeight
          />
          <StepOnlineQuots
            number={"3"}
            step={"Step 3"}
            text={"Personal information"}
            lineHeight
          />
          <StepOnlineQuots
            number={"4"}
            step={"Step 4"}
            text={"Select formula"}
            lineHeight
          />
          <StepOnlineQuots
            number={"5"}
            step={"Step 5"}
            text={"Confirm subscription"}
          />
        </View>
      </View>
      <Buttons
        btn_text={"Get Started"}
        color="#FFF"
        style={{ backgroundColor: Colors.primary }}
        on_press={() => { navigation.navigate("QuotationStep1") }}
      />
    </View>
  )
}

export default OnlineQuotation

const styles = StyleSheet.create({
  stepBox: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10.6,
    marginBottom: 5,
    justifyContent: "space-between",
    marginTop: 20,
    flexDirection: "row"
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    marginStart: 8,
    color:Colors.black
  },

})