import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Card, CardItem, Button} from 'native-base';
import Car from '../../Assets/summary.svg';
import AllButton from '../components/AllButtons';

const Summary = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.cardContainer}>
        <Card>
          <CardItem style={styles.car}>
            <Car />
          </CardItem>
          <CardItem style={styles.cardetails}>
            <View>
              <Text style={styles.label}>Car Type</Text>
              <Text style={styles.txt}>Opel Meriva</Text>
            </View>
            <View>
              <Text style={styles.label}>Car Model</Text>
              <Text style={styles.txt}>Opel Meriva</Text>
            </View>
            <View>
              <Text style={styles.label}>Year</Text>
              <Text style={styles.txt}>2019</Text>
            </View>
          </CardItem>
          <CardItem>
            <View>
              <Text style={styles.label}>Pick-up Location</Text>
              <Text style={styles.txt}>
                27, Unity Road , Off Toyin Street Ikeja Lagos
              </Text>
            </View>
          </CardItem>
          <CardItem>
            <View>
              <Text style={styles.label}>Pick-up Date</Text>
              <Text style={styles.txt}>Thursday, 20th November 2019</Text>
            </View>
          </CardItem>
          <CardItem style={styles.time}>
            <View>
              <Text style={styles.label}>Pick-up Time</Text>
              <Text style={styles.txt}>7:00 AM</Text>
            </View>
            <View>
              <Text style={styles.label}>Drop-Off Time</Text>
              <Text style={styles.txt}>7:00PM</Text>
            </View>
          </CardItem>
        </Card>
      </ScrollView>
      <View style={styles.bottom}>
        <View style={styles.voucher}>
          <View>
            <Text style={styles.VoucherLabel}>Voucher</Text>
            <Text style={styles.voucherTxt}>N0.00</Text>
          </View>
          <Button style={styles.btn}>
            <Text style={styles.btntxt}>Add Voucher</Text>
          </Button>
        </View>
        <View style={styles.total}>
          <Text style={styles.VoucherLabel}>Total:</Text>
          <Text style={styles.voucherTxt}>N30,000.00</Text>
        </View>
        <View style={styles.actnBtn}>
          <AllButton title="Continue to Payment" status={true} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 17,
    paddingTop: 17,
    justifyContent: 'space-between',
  },
  cardContainer: {
    // paddingHorizontal: 17,
    marginHorizontal: 17,
  },
  car: {
    justifyContent: 'center',
  },
  cardetails: {
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  txt: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: '#484848',
    fontFamily: 'Roboto',
  },
  time: {
    justifyContent: 'space-between',
  },
  bottom: {
    paddingHorizontal: 17,
    borderTopWidth: 2.5,
    borderColor: 'rgba(0,0,0,0.105)',
  },
  voucher: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },
  btn: {
    backgroundColor: '#673ab7',
    width: 146,
    borderRadius: 8,
    justifyContent: 'center',
  },
  btntxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  voucherTxt: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  VoucherLabel: {
    fontSize: 13,
    fontWeight: '900',
  },
  total: {
    marginTop: 22,
  },
  actnBtn: {
    paddingVertical: 22,
  },
});
