import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import HomeTabScreen from '../screens/Login/HomeTabScreen';
import AddQScreen from '../screens/Login/AddQScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);

const AppNavigator = createStackNavigator(
  {
    HomeTab: {
      screen: HomeTabScreen,
      navigationOptions: () => ({
        header: () => null,
      }),
    },
    AddQScreen: {
      screen: AddQScreen,
      navigationOptions: () => ({
        headerTintColor: '#3C7DFC',
        headerTitle: () => (
          <Image
            style={styles.container}
            resizeMode={'contain'}
            source={require('../assets/images/logo(x4).png')}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'HomeTab',
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
