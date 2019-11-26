import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Item, Input, Label} from 'native-base';
import NextTextInput from 'react-native-next-input';
import {Button} from 'native-base';

const TokenModal = ({modalVisible, handleOutside, swipe}) => {
  const inputFromChildComponent = (
    combinedValueArray,
    currentValue,
    refForTheCurrentValue,
  ) => {
    console.log(combinedValueArray, currentValue, refForTheCurrentValue);
  };
  return (
    <Modal
      isVisible={modalVisible}
      animationInTiming={600}
      onBackdropPress={handleOutside}>
      <View style={styles.container}>
        <View>
          <View style={styles.iconset}>
            <Icon name="exclamation" size={76} color="#673AB7" />
            <Icon name="question" size={76} color="#673AB7" />
          </View>
          <View>
            <Text style={styles.textIn}>Input token to confirm device</Text>
          </View>
          <View style={styles.textView}>
            <NextTextInput
              noOfTextInput={6}
              textInputStyle={styles.inputText}
              onChangeValue={inputFromChildComponent}
              parentViewStyle={styles.textView}
            />
          </View>
          <View style={styles.resendContainer}>
            <Text>Didn’t recieve token?</Text>
            <TouchableOpacity>
              <Text style={styles.touch}> Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomModal}>
          <Button style={styles.button}>
            <Text style={styles.buttontxt}>Confirm</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default TokenModal;
const styles = StyleSheet.create({
  container: {
    // height: 400,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconset: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 33,
  },
  text: {
    width: 310,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 22,
    marginBottom: 28,
    fontWeight: 'bold',
    fontSize: 17,
  },
  textIn: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
  label: {
    color: '#909090',
  },
  input: {
    width: '86%',
    borderBottomWidth: 1,
    alignSelf: 'center',
    borderBottomColor: '#000',
  },
  bottomModal: {
    display: 'flex',
    marginVertical: 20,
  },
  button: {
    width: '86%',
    marginTop: 64,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: '#673AB7',
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
  inputText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    height: 40,
    width: 40,
    textAlign: 'center',
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  textView: {
    justifyContent: 'space-evenly',
    marginTop: 18,
  },
  resendContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: '5.7%',
  },
  touch: {
    color: '#673AB7',
  },
});
