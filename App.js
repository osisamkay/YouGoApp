import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import CarsScreen from './src/screens/CarsScreen';
import Notifications from './src/screens/Notificarions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import History from './src/screens/History';
import HomeScreen from './src/screens/Home';
import Account from './src/screens/Account';
import HistoryDetails from './src/screens/HistoryDetails';
import Wallet from './src/screens/Wallet';
import Upcoming from './src/screens/Upcoming';
import CalenderView from './src/screens/Calender';
import Summary from './src/screens/Summary';
import AllTopRides from './src/screens/AllTopRides';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './src/reducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import saga from './src/saga/rootSaga';
import {Root} from 'native-base';

const HomeTab = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    Wallet: {
      screen: Wallet,
      navigationOptions: {
        title: 'My Wallet',

        headerStyle: {
          backgroundColor: '#673AB7',
        },
        headerTintColor: '#fff',
      },
    },
  },
  {headerLayoutPreset: 'center'},
);

HomeTab.navigationOptions = ({navigation}) => {
  console.log(navigation);
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const NoticeTab = createStackNavigator(
  {
    Notification: {
      screen: Notifications,
      navigationOptions: {
        title: 'Notification',

        headerStyle: {
          backgroundColor: '#673AB7',
          // height: 90,
        },
        headerTintColor: '#fff',
      },
    },
    TopDeals: {
      screen: AllTopRides,
      navigationOptions: {
        title: 'All Top Deals ',
        headerStyle: {
          backgroundColor: '#673AB7',
        },
        headerTintColor: '#fff',
        tabBarVisible: true,
      },
    },
  },
  {headerLayoutPreset: 'center'},
);
const HistoryTab = createStackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        title: 'History',

        headerStyle: {
          backgroundColor: '#673AB7',
        },
        headerTintColor: '#fff',
      },
    },
    HistoryDetails: {
      screen: HistoryDetails,
      navigationOptions: {
        title: 'Details',

        headerStyle: {
          backgroundColor: '#673AB7',
        },
        headerTintColor: '#fff',
      },
    },
  },
  {headerLayoutPreset: 'center', initialRouteName: 'History'},
);

const CarTab = createStackNavigator(
  {
    CarScreen: {
      screen: CarsScreen,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: '#000',
        headerLeft: () => (
          // <Button
          //   onPress={() => alert('This is a button!')}
          //   title="Info"
          //   color="#000"
          // />
          <Ionicons
            name="ios-arrow-round-back"
            size={40}
            color="black"
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{padding: 17, fontWeight: 'bold'}}
          />
        ),
      }),
    },
    UpComing: {
      screen: Upcoming,
      navigationOptions: {
        title: 'All Upcoming Rides ',
        headerStyle: {
          backgroundColor: '#673AB7',
        },
        headerTintColor: '#fff',
        tabBarVisible: true,
      },
    },
    Calender: {
      screen: CalenderView,
      navigationOptions: {
        title: 'Calendar',
        headerStyle: {
          backgroundColor: '#673AB7',
        },
        headerTintColor: '#fff',
        tabBarVisible: true,
      },
    },
    Summary: {
      screen: Summary,
      navigationOptions: {
        title: 'Booking Summary',
        headerStyle: {
          backgroundColor: '#673AB7',
        },
        headerTintColor: '#fff',
        tabBarVisible: true,
      },
    },
  },
  {headerLayoutPreset: 'center', initialRouteName: 'CarScreen'},
);
CarTab.navigationOptions = ({navigation}) => {
  // console.log(object);
  let tabBarVisible = true;
  if (navigation.state.index === 0 || navigation.state.index !== 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
const AccountTab = createStackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
      header: null,
    },
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {screen: HomeTab},
    Notification: {screen: NoticeTab},
    CarRent: {screen: CarTab, navigationOptions: {title: 'Rent a car'}},
    History: {screen: HistoryTab},
    Account: {screen: AccountTab},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          //   IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        } else if (routeName === 'Notification') {
          iconName = 'ios-mail';
        } else if (routeName === 'History') {
          iconName = 'ios-timer';
        } else if (routeName === 'CarRent') {
          iconName = 'logo-model-s';
        } else if (routeName === 'Account') {
          iconName = 'ios-contact';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#673AB7',
      inactiveTintColor: '#BCBCBC',
      style: {
        height: 50,
        borderTopWidth: 1,
        paddingVertical: 5,
        fontFamily: 'Roboto',
      },
    },
  },
);
const App = createAppContainer(TabNavigator);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
export default () => {
  return (
    <Provider store={store}>
      <Root>
        <App />
      </Root>
    </Provider>
  );
};
