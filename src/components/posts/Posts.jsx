// modules
import React from 'react';
import { Container, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';
import PropTypes from 'prop-types';

import { getPostsRequest } from '../../actions/posts-api';

// components
import SinglePost from './SinglePost';

const Posts = ({ postsInfo }) => (
  <Container>
    <List>
      {postsInfo.map(post => <SinglePost key={post.id} details={post} />)}
    </List>
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
