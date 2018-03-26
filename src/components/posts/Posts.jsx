// modules
import React from 'react';
import { Container, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, withHandlers } from 'recompose';
import PropTypes from 'prop-types';

import { getPostsRequest } from '../../actions/posts-api';
import { writePostData } from '../../api/api';

// components
import SinglePost from './SinglePost';
import PostForm from './PostForm';

// const config = {
//   apiKey: 'AIzaSyAYhQNgycDJ_-Oru2EaAUc_j9oVFKk2ArI',
//   authDomain: 'foodblog-4859b.firebaseapp.com',
//   databaseURL: 'https://foodblog-4859b.firebaseio.com',
// };
//
// const app = firebase.initializeApp(config);
// const postsDatabase = app.database().ref('node').child('posts');
// const writePostData = (e, id, likes = 0) => {
//   const postData = { ...e, likes, id };
//   postsDatabase.push().set(postData);
// };

const Posts = ({ postsInfo, postSubmit }) => {
  return (
    <Container>
      <List>
        {
          Object
          .keys(postsInfo)
          .map(post => <SinglePost key={postsInfo[post].id} details={postsInfo[post]} />)
        }
      </List>
      <PostForm postSubmit={postSubmit} />
    </Container>
  );
};


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
    postSubmit: ({ postsInfo }) => (e) => {
      writePostData(e, postsInfo.length + 1);
      console.log(postsInfo)
    },
  }),
)(Posts);
