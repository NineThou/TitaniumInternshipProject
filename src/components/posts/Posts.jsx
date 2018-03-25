// modules
import React from 'react';
import { Container, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, withHandlers } from 'recompose';
import PropTypes from 'prop-types';

import { getPostsRequest } from '../../actions/posts-api';

// components
import SinglePost from './SinglePost';
import PostForm from './PostForm';

const Posts = ({ postsInfo, postSubmit }) => (
  <Container>
    <List>
      {postsInfo.map(post => <SinglePost key={post.id} details={post} />)}
    </List>
    <PostForm postSubmit={postSubmit} />
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
  withHandlers({
    postSubmit: () => (e) => {
      console.log(e);
    },
  }),
)(Posts);
