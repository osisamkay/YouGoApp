import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Item, Input, Label, Form, Picker} from 'native-base';
import {Button} from 'native-base';
import {Year} from '../../YearData';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';

const YearsModal = ({
  modalVisible,
  handleOutside,
  selected,
  handleDone,
  value,
}) => {
  const placeholder = {
    label: 'Select Year',
    value: null,
    color: 'black',
  };
  return (
    <Modal
      isVisible={modalVisible}
      animationInTiming={600}
      onBackdropPress={handleOutside}>
      <View style={styles.container}>
        <Text style={styles.title}>Select Brand Year</Text>
        <View style={styles.select}>
          <RNPickerSelect
            style={pickerSelectStyles.inputAndroid}
            onValueChange={selected}
            items={Year}
            placeholder={placeholder}
            Icon={() => {
              return (
                <Icon
                  name="ios-arrow-down"
                  size={25}
                  color="black"
                  style={{marginTop: 15}}
                />
              );
            }}
          />
        </View>
        <View style={styles.bottomModal}>
          <Button
            disabled={value == ' ' ? true : false}
            style={styles.button}
            onPress={handleDone}>
            <Text style={styles.buttontxt}>Done</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default YearsModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 17,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: 20,
    borderBottomColor: '#939393',
  },
  button: {
    width: '86%',
    marginTop: 64,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: '#673ab7',
    justifyContent: 'center',
    borderRadius: 6,
    fontFamily: 'Roboto',
    alignSelf: 'center',
  },
  buttontxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  select: {
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#939393',
    fontSize: 30,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
