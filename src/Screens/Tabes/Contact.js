import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { IMAGE } from '../../Constant/Images'
import Buttons from '../../Components/Button'
import Colors from '../../Constant/Colors'
import CommonTextInput from '../../Components/CommonTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';
const Contact = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
          contact: '',
        }}
        onSubmit={values => alert(JSON.stringify(values))}
        // onSubmit={values => {goToList(values)}}
        validationSchema={yup.object().shape({
          name: yup.string().required('Please,Provide your name!'),
          email: yup.string().email().required('Please,Provide your email!'),
          message: yup.string().required('Please,Provide your address!'),
          contact: yup.string().required('Please,Provide your contact!').min(8).max(15, 'contact should not exact 10 characters')
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          handleSubmit,
        }) => (
          <View>
            <View style={styles.main}>
              <View style={{ flexDirection: "row", alignItems: "center", }}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                  <Text style={[styles.text,]}>CONTACT INFORMATION</Text>
                </View>
              </View>
            </View>
            <View>
              <View>
                <Image source={IMAGE.backgroundOfContact} style={styles.backgroundOfContact} />
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", width: 327, alignSelf: "center", }}>
                <Buttons
                  style={{ width: 156, height: 46, backgroundColor: "#F0C551" }}
                  btn_text={"Report Damage"}
                  color={Colors.black}
                  on_press={() => { navigation.navigate("ReportDamage") }}
                />
                <Buttons
                  style={{ width: 156, height: 46, backgroundColor: Colors.primary }}
                  color="#fff"
                  btn_text={"Custom Contract"}
                  on_press={() => { navigation.navigate("CustomContactForm") }}
                />
              </View>

              <View style={{ width: 327, alignSelf: "center", marginTop: "5%", }}>
                <Text style={{ fontSize: 16, lineHeight: 24, color: Colors.black }}>Contact form</Text>
              </View>
              <View>
                <CommonTextInput
                  labelText={"Name"}
                  placeholder="Enter name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                {touched.name && errors.name && (
                  <Text style={styles.error}>
                    {errors.name}
                  </Text>
                )}
                <CommonTextInput
                  labelText={"E-mail"}
                  placeholder="Enter your e-mail address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.error}>
                    {errors.email}
                  </Text>
                )}
                {/* <CommonTextInput
                  labelText={"Phone"}
                  placeholder="Enter your phone number"
                  
                /> */}
                <CommonTextInput
                keyboardType='numeric'
                  labelText={"Contact Number"}
                  placeholder="Enter your contact number"
                  value={values.contact}
                  onChangeText={handleChange('contact')}
                />
                {touched.contact && errors.contact && (
                  <Text style={styles.error}>
                    {errors.contact}
                  </Text>
                )}
                <CommonTextInput
                  inputStyle={{height:80}}
                  labelText={"Message"}
                  placeholder="Enter your message"
                  value={values.message}
                  onChangeText={handleChange('message')}
                />
                {touched.message && errors.message && (
                  <Text style={styles.error}>
                    {errors.message}
                  </Text>
                )}
              </View>
              <View style={{ padding: "3%" }}>
                <Buttons
                  btn_text={"Send"}
                  color={"#fff"}
                  on_press={handleSubmit}
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

export default Contact

const styles = StyleSheet.create({
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
    color: Colors.black
  },
  backgroundOfContact: {
    height: 140,
    width: 327,
    // justifyContent:"center",
    alignSelf: "center"
  },
  imageContainer: {
    position: "absolute",
    // alignSelf:"center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "red"
  },
  icon: {
    height: 24,
    width: 24
  },
  error: {
    fontSize: 15,
    color: '#FF0D10',
    paddingHorizontal:"6%"
  }
})