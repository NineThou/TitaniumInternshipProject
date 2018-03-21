// modules
import React from 'react';
import { Container, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';
import PropTypes from 'prop-types';

import { getEventsRequest } from '../../actions/events-api';

// components
import EventsItem from './EventsItem';

const Events = ({ eventsInfo }) => (
  <Container>
    <List>
      {eventsInfo.map(event => <EventsItem key={event.id} details={event} />)}
    </List>
  </Container>
);

const mapStateToProps = state => ({
  eventsInfo: state.eventsInfo && state.eventsInfo.events,
});

const mapDispatchToProps = dispatch => ({
  getEventsData: bindActionCreators(getEventsRequest, dispatch),
});

Events.propTypes = {
  eventsInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getEventsData();
    },
  }),
)(Events);
