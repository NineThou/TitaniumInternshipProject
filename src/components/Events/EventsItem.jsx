// modules
import React from 'react';
import { List, Button } from 'semantic-ui-react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// colors
import { grey, purple } from '../../styles/colors';


const EventWrap = styled('div')`
  color: white;
  background-color: ${grey};
  border: 3px solid ${purple};
  border-radius: 8px;
  margin: 30px !important;
  padding: 10px !important;
  padding-bottom: 50px !important;
  height: 100%;
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
      <List.Content>{details.title}</List.Content>
      <List.Content>{details.body}</List.Content>
      <List>
        {details.tags.map(tag => <Anchor href="#" key={tag}><List.Content>#{tag}</List.Content></Anchor>)}
      </List>
      <Link to={`/eventInfo/${details.id}`}>
        <List.Content>
          <Button floated="left">Read More</Button>
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
