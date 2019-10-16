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
  titleBox: {
    width: wp('100%'),
    marginTop: hp('5%'),
    marginBottom: hp('2%'),
    paddingHorizontal: wp('5%'),
    // backgroundColor: 'blue',
  },
  textinputOfTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlignVertical: 'top',
    // backgroundColor: 'blue',
  },
  questionBox: {
    width: wp('100%'),
    height: hp('25%'),
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderTopColor: '#E5E5E5',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1%'),
    // backgroundColor: 'blue',
    marginBottom: hp('5%'),
  },
  textinputOfQuestion: {
    flex: 1,
    fontSize: 15,
    color: 'black',
    textAlignVertical: 'top',
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
    paddingHorizontal: wp('5%'),
    // backgroundColor: 'purple',
  },
  hashtagText: {
    fontSize: 15,
    color: '#555555',
  },
  line: {
    width: wp('90%'),
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
    marginVertical: hp('2%'),
  },
  addImageBox: {
    width: wp('100%'),
    paddingHorizontal: wp('5%'),
    // backgroundColor: 'purple',
    marginBottom: hp('5%'),
  },
  addImageText: {
    fontSize: 15,
    color: '#555555',
  },
});
