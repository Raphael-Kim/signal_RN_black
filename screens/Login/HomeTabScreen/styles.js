import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  logoBox: {
    width: wp('100%'),
    height: hp('30%'),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  logo: {
    width: wp('30%'),
    height: hp('10%'),
    // backgroundColor: 'pink',
  },
  questionBox: {
    width: wp('100%'),
    height: hp('25%'),
    // backgroundColor: 'blue',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderTopColor: '#E5E5E5',
    marginBottom: hp('3%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1%'),
  },
  textinputOfQuestion: {
    flex: 1,
    fontSize: 15,
    textAlignVertical: 'top',
    // backgroundColor: 'blue',
  },
  goDetailView: {
    alignItems: 'center',
  },
  goDetailText: {
    color: '#555555',
    textDecorationLine: 'underline',
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
});
