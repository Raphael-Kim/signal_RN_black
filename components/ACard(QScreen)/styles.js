import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  cardContainer: {
    width: wp('100%'),
    // height: hp('12%'),
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderTopColor: '#E5E5E5',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('3%'),
    // backgroundColor: 'blue',
    // justifyContent: 'center',
    marginBottom: hp('2%'),
  },
  //~~~~~~~~~~~~~~~~~~~~
  cardRowContainer: {
    width: wp('90%'),
    // height: hp('5%'),
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'flex-start',
    // paddingHorizontal: wp('5%'),
    marginBottom: hp('2%'),
  },
  profileImage: {
    // backgroundColor: 'pink',
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('8%') / 2,
  },
  nameText: {
    flex: 1, // 안하면 Layout 오류가 발생
    fontWeight: 'bold', // 프로필 사진이랑 균형 맞추기
    marginTop: wp('8%') / 4,
    marginLeft: wp('2%'),
    // backgroundColor: 'yellow',
  },
  whoAmIText: {
    fontWeight: 'normal',
    // backgroundColor: 'pink',
  },
  //~~~~~~~~~~~~~~~~~~~~
  hashTagText: {
    color: '#3C7DFC',
    marginBottom: hp('1%'),
  },
  answerText: {
    // fontSize: 15,
    // fontWeight: 'bold',
    // backgroundColor: 'green',
  },
});
