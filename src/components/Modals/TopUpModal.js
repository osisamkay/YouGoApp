import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Item, Input, Label} from 'native-base';
import {Button} from 'native-base';

const TopUpModal = ({modalVisible, handleOutside, swipe}) => {
  return (
    <Modal
      isVisible={modalVisible}
      animationInTiming={600}
      onBackdropPress={handleOutside}>
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.text}>Top-up Current Ride</Text>
          </View>
          <View style={styles.topUpView}>
            <View>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="1"
                maxLength={2}
              />
            </View>
            <Text style={{borderLeftWidth: 1, height: 30}} />
            <View>
              <Text style={styles.duration}>Hours</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomModal}>
          <Button style={styles.button}>
            <Text style={styles.buttontxt}>Top Up</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default TopUpModal;
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
    borderColor: '#000',
    fontWeight: '700',
    fontSize: 15,
    // height: '60%',
  },
  duration: {
    fontSize: 15,
    fontWeight: '700',
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
  topUpView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginHorizontal: 17,
    justifyContent: 'space-around',
  },
});
