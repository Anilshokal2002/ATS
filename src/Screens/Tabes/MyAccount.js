import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGE } from '../../Constant/Images'
import colors from "../../Constant/Colors"
import Buttons from "../../Components/Button"
import Colors from '../../Constant/Colors'
import AccountData from '../../Components/AccountData'
import AccountData1 from '../../Components/AccountDate1'
import Auth from "@react-native-firebase/auth"

const FormData = ({ title, input, dataStyle }) => {
  return (
    <View style={[{ marginVertical: 10 }, { dataStyle }]}>
      <Text style={{ color: colors.black, fontSize: 12, fontWeight: "500" }}>{title}</Text>
      <Text style={{ color: "#797D85" }}>{input}</Text>
    </View>
  )
}

const MyAccount = ({ navigation }) => {
  const [show, setShow] = useState(true)
  const [color ,setColor] =useState(true)
  return (
    <ScrollView style={{flex:1}}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ margin: 15, }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 12 }}>Hello</Text>
              <Image source={IMAGE.Waving_hand} style={{ height: 16, width: 16 }} />
            </View>
            <View>
              <Text style={styles.Arefine}>{Auth().currentUser.email}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.TouchableOpacity}
          // onPress={() => { navigation.navigate("Setting") }}
          >
            <Image source={IMAGE.accountFile} style={{ height: 46, width: 46 }} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.editComponent}>
              <Text style={styles.userText}>
                User Information
              </Text>
              <TouchableOpacity
                onPress={() => { navigation.navigate("EditAccount") }}
              >
                <Image source={IMAGE.editLogo} style={styles.editImage} />
              </TouchableOpacity>
            </View>
            <View style={styles.editDataContainer}>
              <View style={styles.dataRow}>
                <FormData
                  title={"Name"}
                  input={"Arefin Shuvo"}
                />
                <FormData
                  title={"Company"}
                  input={"Jixart"}
                />
                <FormData
                  title={"E-mail address"}
                  input={Auth().currentUser.email}
                />
                <FormData
                  title={"Address1"}
                  input={"majidee"}
                />
                <FormData
                  title={"Family name"}
                  input={"Uix shuvo"}
                />
              </View>
              <View style={[styles.dataRow, { marginRight: "20%" }]}>
                <FormData
                  title={"Family name"}
                  input={"Uix shuvo"}
                />
                <FormData
                  title={"Phone"}
                  input={"+8801245786"}
                />
                <FormData
                  title={"Zip code"}
                  input={"3800"}
                />
                <FormData
                  title={"Address"}
                  input={"Noakhali"}
                />
                <FormData
                  title={"Country"}
                  input={"Bangladesh"}
                />
              </View>
            </View>
          </View>

          <View style={[styles.buttonComponent ]}>
            <Buttons
              style={[styles.buttonColor,color ? {backgroundColor:colors.primary  } : {backgroundColor:"#FFF" ,}]}
              backgroundColor={Colors.primary}
              btn_text={'Estimations'}
              color="#000"
              on_press={()=>{
            setShow(true)
            setColor(true)
          }}
            />
            <Buttons
              style={[styles.buttonColor,color ? {backgroundColor:"#FFF"} : {backgroundColor:colors.primary  }]}
              btn_text={"Contracts"}
              color="#000"
              on_press={()=>{
            setShow(false)
            setColor(false)
          }}
            />
          </View>
          <View style={{ backgroundColor: "#EDF0F8", borderRadius: 12 }}>
            <View>
              <View style={styles.dataLabel}>
                <Text style={styles.DataLabelText}>ID</Text>
                <Text style={styles.DataLabelText}>               FRM</Text>
                <Text style={styles.DataLabelText}>STD</Text>
                <Text style={styles.DataLabelText}>      NP</Text>
                <Text style={styles.DataLabelText}>PRICE</Text>
              </View>

              {show ? <AccountData /> : <AccountData1 />}

            </View>
            <Buttons
              btn_text={"Load More"}
              style={{ backgroundColor: colors.primary, width: 140, height: 44, }}
              color={"#fff"}
              on_press={() => { navigation.navigate("AccountInfo") }}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default MyAccount

const styles = StyleSheet.create({
  Arefine: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.black,
  },
  TouchableOpacity: {
    alignSelf: "center",
    height: 48, width: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10
  },
  container: {
    backgroundColor: "#fff",
    width: "95%",
    borderRadius: 12,
    margin: 24,
    alignSelf: "center",
  },
  editComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userText: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.black,
    margin: 16,
  },
  editImage: {
    margin: 16,
    height: 16,
    width: 39
  },
  editDataContainer: {
    borderTopWidth: 1,
    borderColor: "#E3E5EA",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dataRow: {
    marginHorizontal: "7%"
  },
  buttonComponent: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "center",
    padding: 4,
    paddingBottom: "4%"
  },
  dataLabel: {
    height: 48,
    backgroundColor: "#2447A2",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-around"
  },
  DataLabelText: {
    color: "#ffffff"
  },
  buttonColor:{ 
    width: "50%", 
    height: 40, 
    backgroundColor: "#fFF",
    borderRadius: 5
    }
})