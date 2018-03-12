// modules
import React from 'react';
import { Message } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

// json
import eventSamples from '../../utils/events.json';

// colors
import { grey, purple } from '../../styles/colors';

const InfoWrap = styled('div')`
  width: 40%;
  margin: 0 auto;
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
  border: 3px solid ${purple};
`;

const EventInfo = ({ match }) => {
  const i = +match.params.eventId;
  const { title } = eventSamples[i];
  const { more } = eventSamples[i];
  return (
    <InfoWrap>
      <Message className={colors}>
        <Message.Header>
          {title}
        </Message.Header>
        <p>
          {more}
        </p>
      </Message>
    </InfoWrap>
  );
};

EventInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      eventId: PropTypes.string.isRequired,
    }),
  }),
};

export default withRouter(EventInfo);

