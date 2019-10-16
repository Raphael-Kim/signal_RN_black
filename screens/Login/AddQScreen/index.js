import { connect } from 'react-redux';
import AddQScreen from './presenter';
import { actionCreators as userActions } from '../../../redux/modules/user';

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps from AddQScreen/index.js');

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
)(AddQScreen);
