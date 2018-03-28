// modules
import React from 'react';
import { Message, Button } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import decode from 'jwt-decode';
import { Link } from 'react-router-dom';


// colors
import { grey } from '../../styles/colors';

// actions
import { getPostsRequest, addLikeRequest, removeLikeRequest } from '../../actions/posts-api';

const Wrapper = styled('div')`
    width: 100;
    min-height: calc(100vh - 200px);
`;

const InfoWrap = styled('div')`
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
`;

const Btn = styled('span')`
  position: relative;
  top: 5px !important;
`;

const ImageDiv = styled('div')`
  height: 400px;
  background-size: cover;
`;

const PostInfo = ({
  postsInfo, match, button, handleLikes,
}) => {
  const data = postsInfo[match.params.postId];
  const userInfo = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';
  const { nickname } = userInfo;
  return (
    <Wrapper>
      <InfoWrap>
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
              disabled={button}
              onClick={e => handleLikes(e)}
              color="red"
              content={data && !Object.values(data.likes).includes(nickname) ? 'Like' : 'Dislike'}
              icon="heart"
              label={{
                basic: true,
                color: 'red',
                pointing: 'left',
                content: data && Object.keys(data.likes).length,
              }}
            />
          </Btn>
          <Link to={`/posts/edit/${match.params.postId}`}>
            <Button floated="left">
              Edit
            </Button>
          </Link>
        </Message>
      </InfoWrap>
    </Wrapper>
  );
};

PostInfo.propTypes = {
  button: PropTypes.bool.isRequired,
  handleLikes: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string,
    }),
  }).isRequired,
  postsInfo: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    likes: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  postsInfo: state.postsInfo && state.postsInfo.posts,
});
const mapDispatchToProps = dispatch => ({
  getPostsData: bindActionCreators(getPostsRequest, dispatch),
  addLikeToPost: bindActionCreators(addLikeRequest, dispatch),
  removeLikeFromPost: bindActionCreators(removeLikeRequest, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withState('button', 'isLiked', false),
  withHandlers({
    // TODO fix likes
    handleLikes: ({ match, addLikeToPost, postsInfo, removeLikeFromPost }) => (e) => {
      e.preventDefault(e);
      const { postId } = match.params;
      const user = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';
      const { nickname } = user;
      const { likes } = postsInfo[postId];
      function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }
      const like = getKeyByValue(likes, nickname);
      // console.log(getKeyByValue(likes, nickname) !== undefined);
      if (getKeyByValue(likes, nickname) !== undefined) {
        removeLikeFromPost(postId, like);
      } else {
        addLikeToPost(postId, nickname);
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.getPostsData();
    },
  }),
)(PostInfo);
