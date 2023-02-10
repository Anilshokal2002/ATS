import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet
} from 'react-native';
import React, { useRef, useState } from 'react';
import Colors from '../Constant/Colors';
const Textinput = (
  {
    text={},
    datas,
    labelText,
  }
) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(datas);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const searchRef = useRef();
  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.Language.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(datas);
    }
  };
  return (
    <View>
    {labelText ?
                <View style={[styles.label, { flexDirection: "row" }]}>
                    <View style={{ height: 16, width: 2, backgroundColor: Colors.primary }}></View>
                    <Text style={styles.labelText}>{labelText}<Text style={{ color: "red" }}>*</Text></Text>
                </View> : null}
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{ fontWeight: '600' }}>
          {selectedLanguage == '' ?  text : selectedLanguage}
        </Text>
        {clicked ? (
          <Image
            source={require('../assets/images/upload.png')}
            style={styles.updateImage}
          />
        ) : (
          <Image
            source={require('../assets/images/dropdown.png')}
            style={styles.updateImage}
          />
        )}
      </TouchableOpacity>
      {clicked ? (
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.component}>
            <TextInput
              placeholder="Search.."
              value={search}
              ref={searchRef}
              onChangeText={txt => {
                onSearch(txt);
                setSearch(txt);
              }}
              style={styles.search}
            />
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: "100%",
                      alignSelf: 'center',
                      height: 40,
                      padding: "2%",
                      justifyContent: 'center',
                      borderBottomWidth: 0.5,
                      borderColor: '#8e8e8e',
                    }}
                    onPress={() => {
                      setSelectedLanguage(item.Language);
                      setClicked(!clicked);
                      onSearch('');
                      setSearch('');
                      setModalVisible(true)
                    }}>
                    <Text style={{ fontWeight: '600' }}>{item.Language}</Text>
                  </TouchableOpacity>
                );
              }}
            />
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => setClicked(!clicked)}>
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
        </Modal>
  ) : null
}
    </View>
  );
};

export default Textinput;
const styles = StyleSheet.create({
  search: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderWidth: 0.2,
    borderColor: '#8e8e8e',
    borderRadius: 7,
    marginTop: 10,
    paddingLeft: 20,
  },
  TouchableOpacity: {
    width: 327,
    height: 48,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#fff"
  },
  updateImage: {
    width: 13,
    height: 8
  },
  component: {
    elevation: 10,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 6,
    margin: "50%"
  },
  button: {
    paddingHorizontal: "20%",
    paddingVertical: "4%",
    backgroundColor: "#F2F1F3"

  },
  textStyle: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    width: 327,
    alignSelf: "center",
    marginTop: 8,
},
labelText: {
    color: Colors.black,
    paddingLeft: 5
}
})