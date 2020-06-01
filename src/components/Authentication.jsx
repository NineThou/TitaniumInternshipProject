import { compose, lifecycle } from 'recompose';
import { setIdToken, setAccessToken, getAccessToken } from '../utils/AuthService';

/* eslint-disable*/

const Authentication = () => {
  return null;
};

export default compose(
  lifecycle({
    componentDidMount() {
      setAccessToken();
      setIdToken();
      console.log(getAccessToken());
      window.location.href = '/';
    },
  }),
)(Authentication);

