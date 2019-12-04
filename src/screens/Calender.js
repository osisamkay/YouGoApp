import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import TimeModal from '../components/Modals/TimeModal';
import AllButton from '../components/AllButtons';
import Icon from 'react-native-vector-icons/FontAwesome';

const CalenderView = ({navigation}) => {
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState('');
  const [dates, setDates] = useState([]);
  const [serial, setSerial] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // function to select date atrandom
  const handleSelect = date => {
    setSelect(date);
    setDates([...dates, date.toString()]);
  };

  //   function to select date serially
  const handleRange = (date, type) => {
    type === 'END_DATE' ? setEndDate(date) : setStartDate(date);
  };

  // function to delete a date from the date list
  const handleDelete = (a, i) => {
    let newArray = [...a];
    newArray.splice(i, 1);
    setDates(newArray);
  };

  //   function closes modal and navigates to summary
  const handleNext = () => {
    setModal(false);
    navigation.navigate('Summary');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.mode}>
          <TouchableOpacity
            onPress={() => {
              setSerial(true);
            }}>
            <Text style={serial ? styles.modeTextPick : styles.modeText}>
              Serial
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSerial(false);
            }}>
            <Text style={serial ? styles.modeText : styles.modeTextPick}>
              Random
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.calendar}>
          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={serial}
            enableSwipe={true}
            onDateChange={handleSelect}
            selectedDayColor="#673ab7"
            selectedDayTextColor="#fff"
          />
        </View>
        <View style={styles.bottom}>
          <FlatList
            data={dates}
            keyExtractor={(item, index) => index}
            renderItem={item => {
              const index = item.index;
              return (
                <View>
                  <View style={styles.list}>
                    <Text>
                      <Icon name="dot-circle-o" color="#673ab7" /> {item.item}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        handleDelete(dates, index);
                      }}>
                      <Text style={styles.delete}>X</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View style={styles.btn}>
        <AllButton
          title="Continue"
          handlePress={() => {
            setModal(true);
          }}
        />
      </View>
      <TimeModal
        modalVisible={modal}
        handleNext={handleNext}
        handleOutside={() => {
          setModal(false);
        }}
      />
    </SafeAreaView>
  );
};

export default CalenderView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  calendar: {
    // height: '92%',
  },
  mode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 61,
    paddingTop: 17,
  },
  modeText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  modeTextPick: {
    fontSize: 17,
    fontWeight: 'bold',
    borderBottomWidth: 1,
  },
  bottom: {
    borderTopWidth: 2,
    borderRadius: 17,
    borderTopColor: 'rgba(0,0,0,0.15)',
    // borderWidth: 1,
    height: '25%',
  },
  btn: {
    paddingBottom: 17,
    alignSelf: 'center',
  },
  list: {
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 17,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delete: {
    color: 'red',
  },
});
