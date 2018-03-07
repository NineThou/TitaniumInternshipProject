import React from 'react';

import { Container, List } from 'semantic-ui-react';

import eventSamples from '../events.json';

import EventsItem from './EventsItem';

const Events = () => (
  <Container>
    <List>
      {eventSamples.map(event => <EventsItem key={event.id} details={event} />)}
    </List>
  </Container>
);

export default Events;
