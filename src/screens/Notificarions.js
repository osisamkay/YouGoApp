import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {NotiData} from '../NotificarionData';
import NotificationComponent from '../components/NotificationComponent';
import BottomTab from '../components/FooterTab';
import TabNavigator from '../components/FooterTab';

const Notifications = () => {
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
      <TabNavigator />
    </SafeAreaView>
  );
};

export default Notifications;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 17,
    marginTop: 7,
  },
  scrollContainer: {height: '93%'},
});
