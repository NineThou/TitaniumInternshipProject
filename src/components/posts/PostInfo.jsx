// modules
import React from 'react';
import { Message, Button } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


// colors
import { grey } from '../../styles/colors';
import { getPostsRequest } from '../../actions/posts-api';

const Wrapper = styled('div')`
    width: 100;
    min-height: calc(100vh - 270px);
`;

const InfoWrap = styled('div')`
  display: flex;
  color: white;
  background-color: ${grey};
  margin: 0 auto !important;
  margin-top: 30px !important;
  width: 80%;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
`;

const btn = css`
  margin-top: 5px !important;
`;

const ImageDiv = styled('div')`
  height: 400px;
  background-size: cover;
`;

const PostInfo = ({
  postsInfo, match, button, handleLikes, likesState,
}) => {
  const data = postsInfo[match.params.postId - 1];
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
          <span>
            <Button className={btn}>
              <FormattedMessage id="posts.delete" />
            </Button>
            <Button
              className="btn"
              disabled={button}
              onClick={e => handleLikes(e)}
              color="red"
              content="Like"
              icon="heart"
              label={{
                basic: true,
                color: 'red',
                pointing: 'left',
                content: data && data.likes + likesState,
              }}
            />
          </span>
        </Message>
      </InfoWrap>
    </Wrapper>
  );
};

PostInfo.propTypes = {
  button: PropTypes.bool.isRequired,
  likesState: PropTypes.number.isRequired,
  handleLikes: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string,
    }),
  }).isRequired,
  postsInfo: PropTypes.arrayOf(PropTypes.shape({
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
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getPostsData();
    },
  }),
  withRouter,
  withState('likesState', 'increment', 0),
  withState('button', 'isDisable', false),
  withHandlers({
    handleLikes: ({ increment, isDisable }) => (e) => {
      e.preventDefault(e);
      increment(n => n + 1);
      isDisable(bool => !bool);
    },
  }),
)(PostInfo);
