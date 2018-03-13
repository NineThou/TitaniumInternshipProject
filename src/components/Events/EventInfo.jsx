// modules
import React from 'react';
import { Message, List } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

// json
import eventSamples from '../../events.json';

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

const EventInfo = ({ match }) => {
  const data = eventSamples[match.params.eventId - 1];
  const {
    title,
    more,
    body,
    tags,
  } = data;
  return (
    <InfoWrap>
      <Message className={colors}>
        <Message.Header>
          {title}
        </Message.Header>
        <p>
          {body}
        </p>
        <p>
          {more}
        </p>
        <List>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          {tags.map(tag => <a href="#" key={tag}><List.Content>#{tag}</List.Content></a>)}
        </List>
      </Message>
    </InfoWrap>
  );
};

EventInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      eventId: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(EventInfo);

