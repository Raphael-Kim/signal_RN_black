import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    // alignItems: 'center',
    // backgroundColor: 'pink',
  },
  titleBox: {
    width: wp('100%'),
    marginTop: hp('5%'),
    marginBottom: hp('2%'),
    // backgroundColor: 'blue',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: wp('5%'),
    // backgroundColor: 'blue',
  },
  moreOnText: {
    color: '#555555',
    // fontSize: 15,
    paddingHorizontal: wp('5%'),
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  hashtagBox: {
    width: wp('100%'),
    marginBottom: hp('2%'),
    // backgroundColor: 'pink',
  },
  hashtagText: {
    // fontSize: 15,
    color: '#3C7DFC',
    paddingHorizontal: wp('5%'),
    // backgroundColor: 'blue',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  QText: {
    // fontSize: 15,
    color: 'black',
    paddingHorizontal: wp('5%'),
    marginBottom: hp('1%'),
    // backgroundColor: 'blue',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  space: {
    width: wp('5%'),
  },
  line: {
    width: wp('100%'),
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    marginTop: hp('3%'),
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  QImageScrollBox: {
    marginTop: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  QImageBox: {
    width: wp('30%'),
    height: wp('30%'),
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginRight: wp('3%'),
    // backgroundColor: 'pink',
  },
  QImage: {
    width: wp('30%'),
    height: wp('30%'),
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  QMetaBox: {
    flexDirection: 'row',
    marginTop: hp('4%'),
    paddingHorizontal: wp('5%'),
    marginBottom: hp('2%'),
    // justifyContent: 'space-between',
  },
  QMetaBoxL: {
    flex: 1,
    flexDirection: 'row',
  },
  numOfABox: {
    flexDirection: 'row',
  },
  numOfATextL: {
    // fontSize: 15,
    color: '#1E4EAD',
    fontWeight: 'bold',
    marginRight: wp('1.5%'),
  },
  numOfATextR: {
    // fontSize: 15,
    color: 'black',
    marginLeft: wp('1.5%'),
  },
  IDKTBox: {
    flexDirection: 'row',
  },
  IDKTTextL: {
    // fontSize: 15,
    color: '#1E4EAD',
    fontWeight: 'bold',
    marginRight: wp('1.5%'),
  },
  IDKTTextR: {
    // fontSize: 15,
    color: 'black',
    marginLeft: wp('1.5%'),
  },
  addAText: {
    // fontSize: 15,
    color: '#FFA800',
    fontWeight: 'bold',
  },
});
