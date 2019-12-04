import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Item, Input, Label} from 'native-base';
import {Button} from 'native-base';

const ReportModals = ({modalVisible, handleOutside, swipe}) => {
  return (
    <Modal
      isVisible={modalVisible}
      animationInTiming={600}
      onBackdropPress={handleOutside}>
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.text}>Report Issues</Text>
          </View>
          <View>
            <TextInput multiline={true} style={styles.input} />
          </View>
        </View>
        <View style={styles.bottomModal}>
          <Button style={styles.button}>
            <Text style={styles.buttontxt}>Report</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ReportModals;
const styles = StyleSheet.create({
  container: {
    // height: 400,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    alignSelf: 'center',
    color: '#673AB7',
    fontSize: 17,
    marginTop: 17,
    fontFamily: 'Roboto',
    marginBottom: 21,
    fontWeight: 'bold',
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
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000',
    // height: '60%',
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
});
