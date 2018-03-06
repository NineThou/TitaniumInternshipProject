import React from 'react';
import { List } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';

const EventWrap = styled('div')`
  background-color: #B2BABB;
  border: 3px solid black;
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

const EventsItem = ({ details }) => {
  return(
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
  )
}

export default EventsItem;