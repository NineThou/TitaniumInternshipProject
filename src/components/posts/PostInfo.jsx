// modules
import React from 'react';
import { Message, Button, Image } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { compose, withState, withHandlers } from 'recompose';

// json
import postSamples from '../../posts.json';

// colors
import { grey } from '../../styles/colors';

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

const PostInfo = (props) => {
  const data = postSamples[props.match.params.postId - 1];
  const {
    title,
    text,
    likes,
  } = data;
  return (
    <Wrapper>
      <InfoWrap>
        <Message className={colors}>
          <Message.Header>
            {title}
          </Message.Header>
          <p>
            {text}
          </p>
          <Image src="https://picsum.photos/1400/200/?random" />
          <span>
            <Button className={btn}>
              <FormattedMessage id="posts.delete" />
            </Button>
            <Button
              className="btn"
              disabled={props.button}
              onClick={e => props.handleLikes(e)}
              color="red"
              content="Like"
              icon="heart"
              label={{
                basic: true,
                color: 'red',
                pointing: 'left',
                content: props.likes + likes,
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
  likes: PropTypes.number.isRequired,
  handleLikes: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string,
    }),
  }).isRequired,
};

export default compose(
  withRouter,
  withState('likes', 'increment', 0),
  withState('button', 'isDisable', false),
  withHandlers({
    handleLikes: ({ increment, isDisable }) => (e) => {
      e.preventDefault(e);
      increment(n => n + 1);
      isDisable(bool => !bool);
    },
  }),
)(PostInfo);

