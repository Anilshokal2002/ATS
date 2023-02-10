import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import NavigationHeader from '../../Components/NavigationHeader'
import Colors from '../../Constant/Colors'
import CommonTextInput from '../../Components/CommonTextInput'
import { IMAGE } from '../../Constant/Images'
import QuotationStep5Componetn from '../../Components/QuotationStep5Componetn'
import Buttons from '../../Components/Button'
// import { ScrollView } from 'react-native'

const DATA = [
  {
    id: 1,
    title: "SUB TOTAL",
    amount: "€58.5"
  },
  {
    id: 2,
    title: "OPTIONS",
    amount: "€0.2"
  },
  {
    id: 3,
    title: "MANAGEMENT FEE",
    amount: "€2.2"
  },
  {
    id: 4,
    title: "TOTAL",
    amount: "€60.25"
  }
]

const Item = ({ item }) => (
  <View style={{ flexDirection: "row", backgroundColor: "#F2F6FE", justifyContent: "space-between", margin: 2, flex: 1 }}>
    <View style={{ padding: 12, flex: 2 }}>
      <Text style={{ fontSize: 12, lineHeight: 16, color: Colors.black }}>{item.title}</Text>
    </View>
    <View style={{ borderLeftWidth: 1, padding: 12, alignSelf: "center", flex: 2, borderColor: "#AFB1B4" }}>
      <Text style={{ lineHeight: 20, color: Colors.black }}>
        {item.amount}
      </Text>
    </View>
  </View>
)
const renderItem = ({ item }) => {
  return (
    <Item
      item={item}
    />
  )
}
const QuotationStep5 = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState()

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
>
    <View style={{ flex: 1 }}>
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
          <Text style={{fontSize:10,position:"absolute"}}>Step 5</Text>
        </View>
      </View>
      
        <View style={styles.container}>
          <View>
            <Text style={{ fontSize: 16, lineHeight: 24, color: Colors.black }}>
              Your online quotation details
            </Text>
            <View style={{ paddingVertical: 15 }}>
              <QuotationStep5Componetn
                label={"What type of sport you will be insuring?"}
                input={"Trail riding"}
              />

              <QuotationStep5Componetn
                label={"Name"}
                input={"Arefin Shuvo"}
              />
              <QuotationStep5Componetn
                label={"Number of people to insure:"}
                input={"4"}
              />
              <QuotationStep5Componetn
                label={"Insurance duration"}
                input={"Per day"}
              />
              <QuotationStep5Componetn
                label={"Departure country:"}
                input={"Europe"}
              />
              <QuotationStep5Componetn
                label={"Destination country"}
                input={"America"}
              />
              <QuotationStep5Componetn
                label={"Starting date"}
                input={"28 - 09 - 22"}
              />
              <QuotationStep5Componetn
                label={"Ending date"}
                input={"31 - 09 - 22"}
              />
              <View style={{ marginVertical: 10 }}>
                <View style={{ backgroundColor: "#FFF" }}>
                  <View style={{ margin: 12 }}>
                    <FlatList
                      data={DATA}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                    />
                  </View>
                </View>
              </View>

              <View style={{ backgroundColor: "#22C36B", flex: 1, height: 44 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <View style={{ backgroundColor: "#FFF", margin: 2, flex: 4 }}>
                    <TextInput
                      placeholder='promotion code (If any)'
                    />
                  </View>
                  <View style={{ alignItems: "center", justifyContent: "space-around", width: 97, flex: 1.5 }}>
                    <TouchableOpacity>
                      <Text style={{ color: "#fff" }}>Apply</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{}}>
                <Buttons
                  color={"#fff"}
                  btn_text={"Subscription online"}
                  style={{ backgroundColor: Colors.primary }}
                />
                <Buttons
                  color={"#000"}
                  btn_text={"Quote by e-mail"}
                  style={{ backgroundColor: "#F0C551" }}
                />
              </View>
            </View>
          </View>
        </View>
    </View>
    </ScrollView>
  )
}

export default QuotationStep5

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    marginVertical: 5
  },
  label: {
  },
  labelText: {
    color: Colors.black,
    paddingLeft: 5
  }

})