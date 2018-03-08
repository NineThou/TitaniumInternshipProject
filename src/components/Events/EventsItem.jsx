import React from 'react';
import { List } from 'semantic-ui-react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const EventWrap = styled('div')`
  background-color: #B2BABB;
  border: 3px solid #586180;
  border-radius: 8px;
  margin: 10px !important;
  padding: 10px;
`;

const Anchor = styled('a')`
  color: grey;
  :hover {
    color: black;
  }
`;

const EventsItem = ({ details }) => (
  <EventWrap>
    <List.Item>
      <List.Content>
        <List.Content>{details.title}</List.Content>
        <List.Content>{details.body}</List.Content>
        <List>
          {details.tags.map(tag => <Anchor href="#" key={tag}><List.Content>#{tag}</List.Content></Anchor>)}
        </List>
      </List.Content>
    </List.Item>
  </EventWrap>
);

EventsItem.propTypes = {
  details: PropTypes.arrayOf.isRequired,
};

export default EventsItem;
