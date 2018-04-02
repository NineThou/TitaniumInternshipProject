// modules
import React from 'react';
import { css } from 'react-emotion';
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
import SearchFilter from '../../utils/SearchFilter';

const wrapper = css`
  padding: 70px 0;
`;

const Posts = ({ postsInfo, match }) => (
  <Container className={wrapper}>
    {
      isLoggedIn && isLoggedIn()
      ?
        <PostForm id={Object.keys(postsInfo).length + 1} />
      :
        ''
    }
    <SearchFilter details={postsInfo} url={match.url} />
    <List>
      {
        Object
        .keys(postsInfo)
        .map(post => (
          <SinglePost
            key={post}
            details={postsInfo[post]}
            id={post}
          />))
      }
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
  postsInfo: PropTypes.shape({
    date: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    likes: PropTypes.objectOf(PropTypes.any),
    more: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.string,
  }),
};

Posts.defaultProps = {
  postsInfo: {},
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      if (!Object.keys(this.props.postsInfo).length) {
        this.props.getPostsData();
      }
    },
  }),
)(Posts);
