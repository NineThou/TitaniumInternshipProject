// modules
import React from 'react';
import { Container, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';
import PropTypes from 'prop-types';

// action
import { getPostsRequest } from '../../actions/posts-api';

// components
import SinglePost from './SinglePost';
import PostForm from './PostForm';

// utils
import { isLoggedIn } from '../../utils/AuthService';

const Posts = ({ postsInfo }) => (
  <Container>
    <List>
      {
        Object
        .keys(postsInfo)
        .map(post => (
          <SinglePost
            key={postsInfo[post].id}
            details={postsInfo[post]}
            id={post}
          />))
      }
    </List>
    {isLoggedIn() ? <PostForm id={Object.keys(postsInfo).length + 1} /> : null}
  </Container>
);


const mapStateToProps = state => ({
  postsInfo: state.postsInfo.posts,
});

const mapDispatchToProps = dispatch => ({
  getPostsData: bindActionCreators(getPostsRequest, dispatch),
});

Posts.propTypes = {
  postsInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getPostsData();
    },
  }),
)(Posts);
