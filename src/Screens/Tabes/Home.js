import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { IMAGE } from '../../Constant/Images'
import { ScrollView } from 'react-native'
import Buttons from '../../Components/Button'
import DataItem from '../../Components/DataItem'
import DataItemContract from '../../Components/DataItemContract'
import Auth from "@react-native-firebase/auth"


const Home = ({ navigation }) => {
  return (
    <ScrollView style={{flex:1}}
    showsVerticalScrollIndicator={false}
    >
    <View style={{ margin: 15 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 12 }}>Hello</Text>
            <Image source={IMAGE.Waving_hand} style={{ height: 16, width: 16 }} />
          </View>
          <View>
            <Text style={styles.Arefine}>
            {Auth().currentUser.email}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => { navigation.navigate("Setting") }}>
          <Image source={IMAGE.Seating} style={{ height: 46, width: 46 }} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: "3%", }}>
        <ImageBackground style={styles.rectangle} source={IMAGE.Background}>
          <View style={styles.totalEstimations}>
            <View>
              <Text style={styles.totalTextNumber}>78</Text>
              <Text style={styles.totalText}>Total Estimations</Text>
            </View>
            <View>
              <Text style={styles.totalTextNumber} >46</Text>
              <Text style={styles.totalText}>Total Total Contacts</Text>
            </View>
          </View>
          <Buttons style={styles.rectangleButton}
            btn_text={'Get Quotation'}
            color={Colors.primary}
          />
        </ImageBackground>
        <View style={styles.View2}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
            <Text style={styles.EstimationText}>Estimations</Text>
            <TouchableOpacity style={[styles.SellAll,]}
              onPress={() => { navigation.navigate("Estimations") }}
            >
              <Text style={styles.SeeAll} >See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dataLabel}>
            <Text style={styles.DataLabelText}>ID</Text>
            <Text style={styles.DataLabelText}>          START DATE</Text>
            <Text style={styles.DataLabelText}>END DATE</Text>
            <Text style={styles.DataLabelText}>PRICE</Text>
          </View>
          <View>
            <DataItem />
          </View>
        </View>
        <View style={styles.View2}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
            <Text style={styles.EstimationText}>Contracts</Text>
            <TouchableOpacity style={[styles.SellAll,]}
              onPress={() => { navigation.navigate("Contracts") }}
            >
              <Text style={styles.SeeAll} >See All</Text>
            </TouchableOpacity>
          </View>
          <View>
            <DataItemContract />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
          <Buttons
            style={{ width: 156, height: 46, backgroundColor: Colors.primary }}
            color="#fff"
            btn_text={"Club Registration"}
            on_press={() => { navigation.navigate("ClubRegistration") }}
          />
          <Buttons
            style={{ width: 156, height: 46, backgroundColor: "#F0C551" }}
            btn_text={"Report Damage"}
            color={Colors.black}
            on_press={() => { navigation.navigate("ReportDamage") }}
          />
        </View>
      </View>

    </View>
    </ScrollView>
  )
}
export default Home
const styles = StyleSheet.create({
  TouchableOpacity: {
    height: 48, 
    width: 48,
  },
  Arefine: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.black,
  },
  rectangle: {
    height:140,
    width: "100%",
    borderRadius: 16,
    alignSelf:"center"
  },
  totalEstimations: {
    flexDirection: "row",
    margin: 12,
    justifyContent: "space-between"
  },
  totalTextNumber: {
    fontSize: 20,
    color: "#FFF",
    lineHeight: 30
  },
  totalText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  rectangleButton: {
    width: 287,
    height: 44,
    backgroundColor: "#fff"
  },
  View2: {
    marginTop: 15,

  },
  SeeAll: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#2B7FFE',
    marginRight: 8,
  },
  EstimationText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
    lineHeight: 24,
    fontFamily: "Helvetica Now Display"
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
  }

})