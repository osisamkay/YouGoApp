import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {NotiData} from '../NotificarionData';
import NotificationComponent from '../components/NotificationComponent';

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {NotiData.map(data => {
            return (
              <View key={data.label}>
                <NotificationComponent
                  label={data.label}
                  date={data.date}
                  details={data.details}
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
