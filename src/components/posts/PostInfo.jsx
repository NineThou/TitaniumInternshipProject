// modules
import React from 'react';
import { Message, Button, Loader, Dimmer } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { compose, withHandlers, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import decode from 'jwt-decode';
import { Link } from 'react-router-dom';

// colors
import { grey } from '../../styles/colors';

// actions
import { getPostsRequest, addLikeRequest, removeLikeRequest } from '../../actions/posts-api';

// helpers
import { getKeyByValue } from '../../utils/helperFunctions';
import { isLoggedIn } from '../../utils/AuthService';

// components
import Comments from '../../commons/Comments';
import AddCommentForm from '../../commons/AddCommentForm';

const Wrapper = styled('div')`
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const CommentsSection = styled('div')`
  position: relative;
  top: 130px;
  margin-bottom: 150px;
`;

const InfoWrap = styled('div')`
  overflow: hidden;
  position: relative;
  top: 100px;
  display: flex;
  color: white;
  background-color: ${grey};
  margin: 0 auto !important;
  margin-top: 30px !important;
  width: 80%;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  @media (max-width: 1614px) {
    top: 80px;
  }
  @media(max-width: 939px) {
    top: 60px;
  }
  @media (max-width: 690px) {
    top: 25px;
    padding: 20px 0;
   }
   @media (max-width: 423px) {
    padding-bottom: 20px; 
   }
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
  width: 100%;
`;

const Btn = styled('span')`
  position: relative;
  top: 5px !important;
`;

const Edit = css`
  margin-top: 5px !important;
`;

const ImageDiv = styled('div')`
  height: 400px;
  background-size: cover;
`;

const PostInfo = ({
  postsInfo, match, handleLikes, loading,
}) => {
  const data = postsInfo[match.params.postId];
  const userInfo = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';
  const { nickname } = userInfo;
  return (
    <Wrapper>
      <InfoWrap>
        {
          !Object.keys(postsInfo).length &&
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        }
        <Message className={colors}>
          <Message.Header>
            {data && data.title}
          </Message.Header>
          <p>
            {data && data.more}
          </p>
          <ImageDiv style={{ backgroundImage: `url(${data && data.image})` }} />
          <Btn>
            <Button
              disabled={loading}
              onClick={e => handleLikes(e)}
              color="red"
              content={data && !Object.values(data.likes).includes(nickname) ? 'Like' : 'Dislike'}
              icon="heart"
              label={{
                basic: true,
                color: 'red',
                pointing: 'left',
                content: data && Object.keys(data.likes).length - 1,
              }}
            />
          </Btn>
          {
            isLoggedIn() ?
              <Btn>
                <Link to={`/posts/edit/${match.params.postId}`}>
                  <Button className={Edit} floated="left">
                    <FormattedMessage id="posts.edit" />
                  </Button>
                </Link>
              </Btn> : null
          }
        </Message>
      </InfoWrap>
      <CommentsSection>
        <Comments postData={data} postKey={match.params.postId} />
        <AddCommentForm postKey={match.params.postId} />
      </CommentsSection>
    </Wrapper>
  );
};

PostInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleLikes: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string,
    }),
  }).isRequired,
  postsInfo: PropTypes.shape({
    date: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    likes: PropTypes.object,
    more: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.string,
  }),
};

PostInfo.defaultProps = {
  postsInfo: {},
};

const mapStateToProps = state => ({
  postsInfo: state.postsInfo && state.postsInfo.posts,
  loading: state.postsInfo && state.postsInfo.loading,
});
const mapDispatchToProps = dispatch => ({
  getPostsData: bindActionCreators(getPostsRequest, dispatch),
  addLikeToPost: bindActionCreators(addLikeRequest, dispatch),
  removeLikeFromPost: bindActionCreators(removeLikeRequest, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withHandlers({
    handleLikes: ({
      match, addLikeToPost, postsInfo, removeLikeFromPost,
    }) => (e) => {
      e.preventDefault(e);
      const { postId } = match.params;
      const user = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';
      const { nickname } = user;
      const { likes } = postsInfo[postId];
      const like = getKeyByValue(likes, nickname);
      if (like) {
        removeLikeFromPost(postId, like);
      } else {
        addLikeToPost(postId, nickname);
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      if (!Object.keys(this.props.postsInfo).length) {
        this.props.getPostsData();
      }
    },
  }),
)(PostInfo);
