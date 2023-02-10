import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IMAGE } from '../Constant/Images'

const QuotationStep5Componetn = ({ label, input }) => {
  return (
    <View style={{  paddingVertical:2 }}>

      <View style={{ backgroundColor: "#FFF", padding: 10 }}>
        <View style={[styles.label, { flexDirection: "row" }]}>
          <View style={{ height: 16, width: 2, backgroundColor: Colors.primary }}></View>
          <Text style={styles.labelText}>{label}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", }}>
          <Text style={{ fontSize: 12, padding: 6 }}>{input}</Text>
          <TouchableOpacity>
            <Image source={IMAGE.editIcon} style={{ height: 8.97, width: 9.11 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default QuotationStep5Componetn

const styles = StyleSheet.create({
  labelText: {
    color: Colors.black,
    paddingLeft: 5
  }
})