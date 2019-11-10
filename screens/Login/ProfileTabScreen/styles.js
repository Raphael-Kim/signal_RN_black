import { StyleSheet, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const sourceInfo = Image.resolveAssetSource(
  require('../../../assets/images/profileTabBG.png'),
);

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    // alignItems: 'center',
    // backgroundColor: 'pink',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  topBox: {
    width: wp('100%'),
    height: wp('100%') * (sourceInfo.height / sourceInfo.width),
    marginBottom: hp('5%'),
  },
  topImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  modifyProfileIconV: {
    position: 'absolute',
    top: wp('4%'),
    right: wp('4%'),
  },
  modifyProfileIcon: {
    width: wp('6%'),
    height: wp('6%'),
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  contents: {
    width: wp('50%'),
    height: hp('50%'),
    // marginTop: hp('5%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
  },
  profileImage: {
    width: wp('35%'),
    height: wp('35%'),
    // backgroundColor: 'black',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  nameBox: {
    borderBottomWidth: 2,
    borderColor: 'white',
    paddingBottom: 5,
    paddingHorizontal: 10,
    // backgroundColor: 'yellow',
  },
  nameFont: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  whoIAmFont: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  metaBox: {
    flexDirection: 'row',
  },
  followBox: {
    flexDirection: 'row',
    marginRight: wp('1.5%'),
    alignItems: 'center',
  },
  followFontL: {
    marginRight: wp('1%'),
    fontSize: 15,
    color: 'white',
    // fontWeight: 'bold',
  },
  followFontR: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  followingBox: {
    flexDirection: 'row',
    marginLeft: wp('1.5%'),
  },
  followingFontL: {
    marginRight: wp('1%'),
    fontSize: 15,
    color: 'white',
  },
  followingFontR: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  followButtonTO: {
    borderRadius: wp('10%'),
    // backgroundColor: 'black',
  },
  followButton: {
    backgroundColor: '#7583FF',
    width: wp('20%'),
    height: hp('5%'),
    borderRadius: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  followButtonFont: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    // backgroundColor: 'pink',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  space: {
    height: hp('500%'),
    // backgroundColor: 'pink',
  },
});
