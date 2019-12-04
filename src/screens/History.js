import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NotiData} from '../NotificarionData';
import HistoryComponent from '../components/HistoryComponent';

const History = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {NotiData.map(data => {
            return (
              <View key={data.label}>
                <HistoryComponent
                  label={data.label}
                  date={data.date}
                  details={data.details}
                  handlePress={() => {
                    navigation.navigate('HistoryDetails');
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default History;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 17,
    marginTop: 7,
  },
});
