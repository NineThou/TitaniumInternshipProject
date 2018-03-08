// modules
import React from 'react';
import { Container, List } from 'semantic-ui-react';

// json
import eventSamples from '../../utils/events.json';

// components
import EventsItem from './EventsItem';

const Events = () => (
  <Container>
    <List>
      {eventSamples.map(event => <EventsItem key={event.id} details={event} />)}
    </List>
  </Container>
);

export default Events;

