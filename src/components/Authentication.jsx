import { compose, lifecycle } from 'recompose';
import { setIdToken, setAccessToken } from '../utils/AuthService';

/* eslint-disable*/

const Authentication = () => {
  return null;
};

export default compose(
  lifecycle({
    componentDidMount() {
      setAccessToken();
      setIdToken();
      window.location.href = '/';
    },
  }),
)(Authentication);

