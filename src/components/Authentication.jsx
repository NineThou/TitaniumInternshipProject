import { compose, lifecycle } from 'recompose';
import { setIdToken, setAccessToken, userInfo } from '../utils/AuthService';


const Authentication = () => {
  return null;
};

export default compose(
  lifecycle({
    componentDidMount() {
      setAccessToken();
      setIdToken();
      userInfo();
      window.location.href = '/';
    },
  }),
)(Authentication);

