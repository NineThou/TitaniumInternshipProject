// modules
import React from 'react';
import { Container, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';

import { getPostsRequest } from '../../actions/posts-api';

// components
import SinglePost from './SinglePost';

const Posts = ({ postsInfo }) => (// eslint-disable-line
  <Container>
    <List>
      {postsInfo.map(event => <SinglePost key={event.id} details={event} />)}
    </List>
  </Container>
);

const mapStateToProps = state => ({
  postsInfo: state.postsInfo.posts,
});

const mapDispatchToProps = dispatch => ({
  getPostsData: bindActionCreators(getPostsRequest, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getPostsData();
    },
  }),
  setPropTypes({
    postsInfo: PropTypes.array.isRequired,
  }),
)(Posts);
