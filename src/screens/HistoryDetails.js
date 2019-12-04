import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Car from '../../Assets/prado';
import {TouchableRipple} from 'react-native-paper';

const HistoryDetails = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.topDetailContainer}>
          <Text style={styles.carName}>Toyota Prado 2015</Text>
          <View style={styles.topGroup}>
            <View>
              <Car />
              <Text style={styles.toptext}>Nov 12, 2019 - Nov 16, 2019</Text>
              <Text
                style={{...styles.toptext, fontWeight: 'bold', marginTop: 10}}>
                Pickup Location
              </Text>
              <Text style={styles.toptext}>
                23, Unity Road Ikeja, Lagos State
              </Text>
            </View>
            <View style={{justifyContent: 'flex-end', paddingBottom: 20}}>
              <Text style={{...styles.status, marginBottom: 10}}>
                Completed
              </Text>
              <Text style={styles.statusText}>Pick up time: 7:00am </Text>
              <Text style={styles.statusText}>Driver: Olise Micheal</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.payment}>Payment</Text>
        </View>
        <View style={styles.method}>
          <Text style={styles.methodText}>Cash</Text>
          <Text style={styles.methodText}>N350,000</Text>
        </View>
        <View>
          <Text style={styles.payment}>Need help?</Text>
        </View>
        <View style={styles.help}>
          <TouchableOpacity>
            <Text style={styles.helpText}>Report an issue</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.helpText}>Report this ride</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.helpText}>Report this driver</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.helpText}>Lost an item</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.helpText}>Trip Canceled Fee</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.helpText}>Ride did not happen</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.helpText}>Resend Receipt</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryDetails;

const styles = StyleSheet.create({
  container: {flex: 1},
  topDetailContainer: {
    // height: 300,
    // borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 2,
    paddingBottom: 26,
  },
  carName: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    paddingTop: 15,
  },
  toptext: {
    fontSize: 13,
    // fontWeight: 'bold',
  },
  topGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    paddingTop: 15,
  },
  status: {
    color: '#00E217',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  statusText: {
    textAlign: 'right',
  },
  payment: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingVertical: 7,
    paddingHorizontal: 17,
    backgroundColor: '#EAEAEA',
  },
  method: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 2,
  },
  methodText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 'bold',
  },
  help: {
    paddingHorizontal: 17,
  },
  helpText: {
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
