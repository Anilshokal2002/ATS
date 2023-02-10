import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import NavigationHeader from '../../../Components/NavigationHeader'
import { IMAGE } from '../../../Constant/Images'
import Colors from '../../../Constant/Colors'


const DATA = [
  {
    id: '1',
    num:"1.",
    title: "Endurance motocycle",
  },
  {
    id: '2',
    num:"2.",
    title: "Enduro"
  },
  {
    id: '3',
    num:"3.",
    title: "Stunt"
  },
  {
    id: '4',
    num:"4.",
    title: "Freestyle motocross"
  },
  {
    id: '5',
    num:"5.",
    title: "Motocross"
  },
  {
    id: '6',
    num:"6.",
    title: "Speed motocycle"
  },
  {
    id: '7',
    num:"7.",
    title: "Supermotard"
  },
  {
    id: '8',
    num:"8.",
    title: "Motocycle on ice"
  },
  {
    id: '9',
    num:"9.",
    title: "Trial"
  },
  {
    id: '10',
    num:"10.",
    title: "Speedway"
  },
  {
    id: '11',
    num:"11.",
    title: "Flat Track"
  },
  {
    id: '12',
    num:"12.",
    title: "YCF"
  },
  {
    id: '13',
    num:"13.",
    title: "Pit Bike"
  },
]
const Item = ({ item, onPress, textColor ,num,title}) => (

  <View style={{ backgroundColor: "#FFF", height: 48, width: 327, alignSelf: "center", borderRadius: 8, alignItems: "center", flexDirection: "row", justifyContent: "space-around",marginTop:"2%" }}>
    <View style={{ flex: 4, flexDirection: "row", marginStart: "4%" }}>
      <Text style={{color:Colors.black}}>{item.num}</Text>
      <Text style={{color:Colors.black}}>{item.title}</Text>
    </View>
    <View style={{ flex: 2 }}>
      <TouchableOpacity style={{ backgroundColor: Colors.primary, height: 36, width: 96, borderRadius: 8, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#FFF" }}>
          Subscribe
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
const SportsList = ({navigation}) => {
  const [selectedId , setSelectedId] =useState()
    const  renderItem=({item})=>{
    return (
        <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        />
    )
}
  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <NavigationHeader  navigation={navigation}
          text={"Sports List"}
          source={IMAGE.Search}
          color={Colors.black}
          on_press={() => { navigation.navigate("Setting") }}
        />
        <ScrollView style={{marginBottom:"14%"}}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item =>item.id}
            extraData={setSelectedId}
        />
    </ScrollView>
      </View>
    </View>
  )
}

export default SportsList

const styles = StyleSheet.create({})