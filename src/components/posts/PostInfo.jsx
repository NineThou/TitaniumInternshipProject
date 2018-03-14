// modules
import React from 'react';
import { Message, Button, Image } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// json
import postSamples from '../../posts.json';

// colors
import { grey } from '../../styles/colors';

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
        <Button className={btn}>
          <FormattedMessage id="posts.delete" />
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

