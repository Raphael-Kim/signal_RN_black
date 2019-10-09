import { connect } from 'react-redux';
import HomeTabScreen from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps from HomeTabScreen/index.js');

  const {
    user: { userInfo },
  } = state; // → userInfo from kakao

  return {
    userInfo,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setLogOut: () => {
      dispatch(userActions.setLogOut());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeTabScreen);
