// modules
import React from 'react';
import { Message, Button, Image } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

// json
import postSamples from '../../posts.json';

// colors
import { grey, purple } from '../../styles/colors';

const InfoWrap = styled('div')`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
  border: 3px solid ${purple};
`;

const PostInfo = ({ match }) => {
  const data = postSamples[match.params.postId - 1];
  const {
    title,
    text,
  } = data;
  return (
    <InfoWrap>
      <Message className={colors}>
        <Message.Header>
          {title}
        </Message.Header>
        <p>
          {text}
        </p>
        <Image src="https://picsum.photos/1400/200/?random" />
        <Button>
          Delete
        </Button>
      </Message>
    </InfoWrap>
  );
};

PostInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      eventId: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(PostInfo);

