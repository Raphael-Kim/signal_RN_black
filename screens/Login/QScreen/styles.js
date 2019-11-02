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
  textOfTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlignVertical: 'top',
    paddingHorizontal: wp('5%'),
    // backgroundColor: 'blue',
  },
  questionBox: {
    width: wp('100%'),
    height: hp('25%'),
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderTopColor: '#E5E5E5',
    paddingVertical: hp('1%'),
    // backgroundColor: 'blue',
    marginBottom: hp('5%'),
  },
  textinputOfQuestion: {
    flex: 1,
    fontSize: 15,
    color: 'black',
    textAlignVertical: 'top',
    paddingHorizontal: wp('5%'),
    // backgroundColor: 'blue',
  },
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
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  space: {
    height: hp('16%'),
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  hashtagBox: {
    width: wp('100%'),
    // backgroundColor: 'pink',
  },
  hashtagText: {
    fontSize: 15,
    // color: '#555555',
    paddingHorizontal: wp('5%'),
  },
  textinputOfHashtag: {
    // flex: 1,
    fontSize: 15,
    color: 'black',
    textAlignVertical: 'top',
    paddingHorizontal: wp('5%'),
    // backgroundColor: 'blue',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  line: {
    width: wp('90%'),
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: hp('2%'),
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
    width: wp('30%'),
    height: wp('30%'),
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: 'pink',
  },
  uploadImage: {
    width: wp('30%'),
    height: wp('30%'),
  },
});
