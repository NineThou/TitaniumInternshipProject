// modules
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
import * as actionCreators from '../redux-controllers/actions/actionCreators';

// component
import Menu from './Menu';

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.events,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default App;
