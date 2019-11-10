import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// → 'Warning: componentWillReceiveProps has been renamed, and is not recommended for use.' 등 발생
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoggedInBTN_HomeNavigation from './LoggedInBTN_HomeNavigation';
import LoggedInBTN_ProfileNavigation from './LoggedInBTN_ProfileNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const getTabBarIcon = ({ navigation, focused, horizontal, tintColor }) => {
  const { routeName } = navigation.state;

  if (routeName === 'Home') {
    if (Platform === 'ios') {
      if (focused === false) {
        return <Ionicons name={'ios-home'} size={25} color={'#555555'} />;
      } else {
        return <Ionicons name={'ios-home'} size={25} color={'#3C7DFC'} />;
      }
    } else {
      if (focused === false) {
        return <Ionicons name={'md-home'} size={25} color={'#555555'} />;
      } else {
        return <Ionicons name={'md-home'} size={25} color={'#3C7DFC'} />;
      }
    }
  } else if (routeName === 'Profile') {
    if (Platform === 'ios') {
      if (focused === false) {
        return <Ionicons name={'ios-person'} size={25} color={'#555555'} />;
      } else {
        return <Ionicons name={'ios-person'} size={25} color={'#3C7DFC'} />;
      }
    } else {
      if (focused === false) {
        return <Ionicons name={'md-person'} size={25} color={'#555555'} />;
      } else {
        return <Ionicons name={'md-person'} size={25} color={'#3C7DFC'} />;
      }
    }
  }
};

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: { screen: LoggedInBTN_HomeNavigation },
    Profile: { screen: LoggedInBTN_ProfileNavigation },
  },
  {
    labeled: false,
    // activeColor: 'red',
    // inactiveColor: 'black',
    initialRouteName: 'Home',
    backBehavior: 'initialRoute',
    barStyle: { backgroundColor: 'white' },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) =>
        getTabBarIcon({ navigation, focused, horizontal, tintColor }),
    }),
  },
);

const LoggedInMaterialBottomTabNavigation = createAppContainer(AppNavigator);

export default LoggedInMaterialBottomTabNavigation;
