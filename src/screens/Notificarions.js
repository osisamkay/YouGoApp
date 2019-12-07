import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {NotiData} from '../NotificarionData';
import NotificationComponent from '../components/NotificationComponent';
import BottomTab from '../components/FooterTab';
// import TabNavigator from '../components/FooterTab';

const Notifications = () => {
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState([]);

  const handleCheck = e => {
    setStatus(!status);
  };

  //checked value
  const press = a => {
    setChecked([...checked, a]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={NotiData}
          keyExtractor={item => item.label}
          renderItem={({item}) => {
            const label = item.label;
            return (
              <NotificationComponent
                label={item.label}
                date={item.date}
                details={item.details}
                checked={checked}
                Show={show}
                handleLongPress={() => {
                  setShow(!show);
                }}
                value={item.label}
                handleCheck={() => {
                  press(label);
                }}
              />
            );
          }}
        />
      </View>
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
});
