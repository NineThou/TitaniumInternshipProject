// modules
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
import * as actionCreators from '../redux-controllers/actions/actionCreators';

// component
import Header from './Header/Header';

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.events,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Header);

export default App;
