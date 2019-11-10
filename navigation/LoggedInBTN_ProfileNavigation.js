import React from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileTabScreen from '../screens/Login/ProfileTabScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);

const AppNavigator = createStackNavigator(
  {
    ProfileTab: {
      screen: ProfileTabScreen,
      navigationOptions: () => ({
        header: () => null,
        // headerTransparent: true,
      }),
    },
  },
  {
    initialRouteName: 'ProfileTab',
    // headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerLeftContainerStyle: {},
      headerTitleContainerStyle: {},
      headerRightContainerStyle: {},
    },
    // headerMode: 'none',
  },
);

const styles = StyleSheet.create({
  container: {
    width: wp('21%'),
    height: hp('5%'),
    marginTop: hp('0.6%'),
    // backgroundColor: 'pink',
  },
});

export default AppNavigator;
