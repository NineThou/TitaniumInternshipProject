// modules
import React from 'react';
import { List, Button, Image } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// colors
import { grey } from '../../styles/colors';


const EventWrap = styled('div')`
  color: white;
  background-color: ${grey};
  margin: 30px !important;
  padding-bottom: 50px !important;
  height: 100%;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
`;

const Anchor = styled('a')`
  color: grey;
  :hover {
    color: black;
  }
`;


const listpadding = css`
  padding-top: 10px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
`;

const ImageDiv = styled('div')`
  height: 200px;
  min-width: 400px;
  background-size: cover;
`;

const EventsItem = ({ details }) => (
  <EventWrap>
    <ImageDiv style={{ backgroundImage: `url(${details && details.image})` }} />
    <List.Item className={listpadding}>
      <List.Content>{details.title}</List.Content>
      <List.Content>{details.body}</List.Content>
      <List>
        {details.tags.map(tag => <Anchor href="#" key={tag}><List.Content>#{tag}</List.Content></Anchor>)}
      </List>
      <Link to={`/eventInfo/${details.id}`}>
        <List.Content>
          <Button floated="left">
            <FormattedMessage id="events.readmore" />
          </Button>
        </List.Content>
      </Link>
    </List.Item>
  </EventWrap>
);

EventsItem.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    tags: PropTypes.array,
  }).isRequired,
};

export default EventsItem;
