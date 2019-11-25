import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Settings from './src/screens/Settings';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import CarsScreen from './src/screens/CarsScreen';
import Notifications from './src/screens/Notificarions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import History from './src/screens/History';

const MainNavigator = createStackNavigator(
  {
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
    CarScreen: {
      screen: CarsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: '#673AB7',
      },
    },
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
    History: {
      screen: History,
      navigationOptions: {
        title: 'History',

        headerStyle: {
          backgroundColor: '#673AB7',
          // height: 90,
        },
        headerTintColor: '#fff',
      },
    },
  },
  {
    initialRouteName: 'Login',
    headerLayoutPreset: 'center',
  },
);

// const TabNavigator = createBottomTabNavigator(
//   {
//     Notification: Login,
//   },
//   {
//     defaultNavigationOptions: ({navigation}) => ({
//       tabBarIcon: ({focused, horizontal, tintColor}) => {
//         const {routeName} = navigation.state;
//         let IconComponent = Ionicons;
//         let iconName;
//         if (routeName === 'Notification') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//           // Sometimes we want to add badges to some icons.
//           // You can check the implementation below.
//           IconComponent = HomeIconWithBadge;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-options`;
//         }

//         // You can return any component that you like here!
//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   },
// );
const App = createAppContainer(MainNavigator);

export default App;
