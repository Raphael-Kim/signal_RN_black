import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// → 'Warning: componentWillReceiveProps has been renamed, and is not recommended for use.' 등 발생
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoggedInBTN_HomeNavigation from './LoggedInBTN_HomeNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: { screen: LoggedInBTN_HomeNavigation },
  },
  {
    labeled: true,
    activeColor: '#272822',
    inactiveColor: 'grey',
    initialRouteName: 'Home',
    backBehavior: 'initialRoute',
    barStyle: { backgroundColor: '#694fad' },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        if (Platform === 'ios') {
          return <Ionicons name={'ios-home'} size={25} color={'white'} />;
        } else {
          return <Ionicons name={'md-home'} size={25} color={'white'} />;
        }
      },
    }),
  },
);

const LoggedInMaterialBottomTabNavigation = createAppContainer(AppNavigator);

export default LoggedInMaterialBottomTabNavigation;
