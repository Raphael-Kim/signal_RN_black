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
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  questionBox: {
    width: wp('100%'),
    // marginTop: hp('5%'),
    // marginBottom: hp('2%'),
    // backgroundColor: 'blue',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
  moreOnText: {
    color: '#555555',
    // fontSize: 15,
    paddingHorizontal: wp('5%'),
  },
  QText: {
    // fontSize: 15,
    color: 'black',
    paddingHorizontal: wp('5%'),
    marginBottom: hp('1%'),
    // backgroundColor: 'blue',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  QImageScrollBox: {
    marginTop: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  QImageBox: {
    width: wp('25%'),
    height: wp('25%'),
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginRight: wp('3%'),
    // backgroundColor: 'pink',
  },
  QImage: {
    width: wp('25%'),
    height: wp('25%'),
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  answerBox: {
    width: wp('100%'),
    minHeight: hp('25%'), // 레퍼런스: 에브리타임
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderTopColor: '#E5E5E5',
    paddingVertical: hp('1%'),
    marginTop: hp('3%'),
    marginBottom: hp('5%'),
    // backgroundColor: 'blue',
  },
  textinputOfAnswer: {
    flex: 1,
    fontSize: 15,
    color: 'black',
    textAlignVertical: 'top',
    paddingHorizontal: wp('5%'),
    // backgroundColor: 'pink',
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
  addImageBox: {
    width: wp('100%'),
    // backgroundColor: 'pink',
    marginBottom: hp('5%'),
    paddingHorizontal: wp('5%'),
  },
  addImageText: {
    fontSize: 15,
    // color: '#555555',
    marginBottom: hp('2%'),
  },
  uploadImageBox: {
    width: wp('25%'),
    height: wp('25%'),
    borderWidth: 1,
    borderColor: '#E5E5E5',
    // backgroundColor: 'pink',
  },
  uploadImage: {
    width: wp('25%'),
    height: wp('25%'),
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  askButton: {
    width: wp('20%'),
    height: hp('5%'),
    borderRadius: 20,
    backgroundColor: '#3C7DFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  askButtonText: {
    color: 'white',
    fontSize: 15,
  },
});
