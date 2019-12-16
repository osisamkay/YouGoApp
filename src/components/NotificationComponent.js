import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Envelope from '../../Assets/envelope.svg';

const NotificationComponent = ({
  label,
  details,
  date,
  checked,
  handleCheck,
  Show,
  handleLongPress,
  value,
}) => {
  return (
    <TouchableOpacity style={styles.container} onLongPress={handleLongPress}>
      <View style={styles.labelTop}>
        <View style={styles.label}>
          <Envelope width={20} height={20} />
          <Text style={styles.labelText}>{label}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text numberOfLines={2} style={styles.info}>
          {details}
        </Text>
        <View style={Show ? {display: 'flex'} : {display: 'none'}}>
          <Checkbox
            status={checked.includes(value) ? 'checked' : 'unchecked'}
            onPress={handleCheck}
            color="#673ab7"
            value={value}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'rgba(0,0,0,0.15)',
    borderBottomWidth: 1,
    paddingBottom: 13,
    paddingTop: 13,
  },
  labelTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {flexDirection: 'row'},
  labelText: {
    marginLeft: 10,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  info: {
    fontFamily: 'Roboto',
    fontSize: 13,
    alignSelf: 'center',
    width: 320,
    maxWidth: '85%',
    color: '#8c8c8c',
    marginLeft: 30,
  },
  date: {
    color: '#8A8A8A',
    fontSize: 13,
    lineHeight: 24,
  },
});
