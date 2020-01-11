import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import TimeModal from '../components/Modals/TimeModal';
import AllButton from '../components/AllButtons';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {SECONDTripDetails} from '../actions/Actions';

const CalenderView = ({navigation}) => {
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState('');
  const [dates, setDates] = useState([]);
  const [serial, setSerial] = useState(false);
  const [mode, setMode] = useState('random');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [time, setTime] = useState(null);
  const [stop, setStop] = useState(null);
  const [stopTime, setStopTime] = useState(false);
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(false);
  const [location, setLocation] = useState(false);

  // dispatch
  const dispatch = useDispatch();

  // function to select date at random
  const handleSelect = date => {
    setSelect(date);
    setInfo(true);
    let dateFormat = moment(date).format('MMM Do YY');
    setDates([...dates, dateFormat]);
    if (!serial) {
      setMode(['random', ...dates, dateFormat]);
    } else {
      setMode(['range', ...dates, dateFormat]);
    }
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
    dispatch(SECONDTripDetails(tripDetails));
    setModal(false);
    navigation.navigate('Summary');
  };

  const handleStartTime = (event, d) => {
    setShow(false);
    setTime(moment(d).format('HH:mm A'));
  };
  const handleStopTime = (event, d) => {
    setShow(false);
    setStop(moment(d).format('HH:mm A'));
  };

  //   handles modal closing
  const closeModal = () => {
    setModal(false);
  };

  //function to show time

  const showClock = () => {
    setStopTime(false);
    setShow(true);
  };
  const showStopClock = () => {
    setStopTime(true);
    setShow(true);
  };

  const tripDetails = {location, time, mode}; //dispatch information
  console.log(tripDetails);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#522E92" />
      <ScrollView>
        <View style={styles.mode}>
          <TouchableOpacity
            onPress={() => {
              setSerial(true);
              setDates([]);
            }}>
            <Text style={serial ? styles.modeTextPick : styles.modeText}>
              Serial
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSerial(false);
              setDates([]);
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
          {!serial ? (
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
          ) : (
            <View style={styles.list}>
              <Text>From:{dates[0]}</Text>
              <Text>To:{dates[1]}</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <AllButton
          title="Continue"
          status={info}
          handlePress={() => {
            setModal(true);
          }}
        />
      </View>
      <TimeModal
        modalVisible={modal}
        handleNext={handleNext}
        Show={show}
        startDate={time}
        endDate={stop}
        handleOutside={closeModal}
        ShowClock={showClock}
        ShowStopClock={showStopClock}
        handleStartTime={!stopTime ? handleStartTime : handleStopTime}
        getLocation={text => {
          setLocation(text);
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
    // height: '60%',
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
    // height: '25%',
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
    flex: 1,
  },
  delete: {
    color: 'red',
  },
});
