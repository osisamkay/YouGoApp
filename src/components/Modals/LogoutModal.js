import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import {Item, Input, Label} from 'native-base';
import {Button} from 'native-base';

const LogoutModals = ({modalVisible, handleOutside, handleLogout}) => {
  return (
    <Modal
      isVisible={modalVisible}
      animationInTiming={600}
      onBackdropPress={handleOutside}>
      <View style={styles.container}>
        <View>
          <View style={styles.iconset}>
            <Icon name="logout" size={76} color="#F98383" />
          </View>
          <View style={styles.text}>
            <Text style={styles.textIn}>
              Are your sure you want to logout ?
            </Text>
          </View>
        </View>
        <View style={styles.bottomModal}>
          <Button style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttontxt}>Logout</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModals;
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
    color: '#F98383',
    paddingTop: 15,
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
    backgroundColor: '#F98383',
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
