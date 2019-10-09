import { connect } from 'react-redux';
import LogInScreen from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setToken: () => {
      dispatch(userActions.setToken());
    },
    setUser: () => {
      dispatch(userActions.setUser());
    },
    setLogIn: () => {
      dispatch(userActions.setLogIn());
    },
    setLogOut: () => {
      dispatch(userActions.setLogOut());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(LogInScreen);
// ↑ 모든 redux ERROR의 원인은 **null** 때문이었다! (2019년 2월 4일 새벽 1시 14분)
