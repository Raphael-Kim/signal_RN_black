import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    marginBottom: hp('5%'),
  },
  cardContainer: {
    width: wp('100%'),
    height: hp('12%'),
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderTopColor: '#E5E5E5',
    paddingHorizontal: wp('5%'),
    // paddingVertical: hp('1%'),
    // backgroundColor: 'pink',
    justifyContent: 'center',
  },
  hashTagText: {
    color: '#3C7DFC',
    marginBottom: hp('1%'),
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    // backgroundColor: 'green',
  },
  cardRowContainer: {
    width: wp('100%'),
    height: hp('5%'),
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    // marginBottom: hp('5%'),
  },
  imageOfAnswers: {
    backgroundColor: 'pink',
    width: 22,
    height: 22,
    borderRadius: 22,
  },
});
