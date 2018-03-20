// modules
import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPostsRequest } from '../../redux-controllers/actions/posts-api-actions';

// components
import SinglePost from './SinglePost';

class Posts extends Component {
  componentDidMount() {
    this.props.getPostsData();
  }
  render() {
    const { postsInfo } = this.props;
    return (
      <Container>
        <List>
          {postsInfo.map(event => <SinglePost key={event.id} details={event} />)}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  postsInfo: state.postsInfo.posts,
});

const mapDispatchToProps = dispatch => ({
  getPostsData: bindActionCreators(getPostsRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
