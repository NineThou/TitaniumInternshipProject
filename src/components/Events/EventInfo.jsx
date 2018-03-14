// modules
import React from 'react';
import { List, Image } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

// json
import eventSamples from '../../events.json';

// colors
import { grey } from '../../styles/colors';

const InfoWrap = styled('div')`
  display: flex;
  position: relative;
  top: 30px;
  display: flex;
  align-items: center;
  color: white;
  background-color: ${grey};
  margin: 0 auto !important;
  width: 80%;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  border: 0 !important;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

const ContentWrap = styled('div')`
  margin: 20px;
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
`;

const imgpos = css` 
  width: 100%;
  max-height: 600px;
  @media (max-width: 1150px) {
    max-height: 1000px;
  }
  @media (max-width: 1050px) {
    max-height: 100%;
    width: 100%;
  }
  
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
      <Image className={imgpos} src="https://picsum.photos/1000/?random" />
      <ContentWrap className={colors}>
        <h1>
          {title}
        </h1>
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
      </ContentWrap>
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

