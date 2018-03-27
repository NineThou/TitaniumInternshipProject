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
import EventForm from './EventForm';
import { isLoggedIn } from '../../utils/AuthService';


const Events = ({ eventsInfo }) => (
  <Container>
    <List>
      {Object.keys(eventsInfo).map(event => <EventsItem key={event} details={eventsInfo[event]} />)}
    </List>
    {isLoggedIn() ? <EventForm id={Object.keys(eventsInfo).length + 1} /> : null}
  </Container>
);

const mapStateToProps = state => ({
  eventsInfo: state.eventsInfo.events,
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
