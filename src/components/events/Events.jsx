// modules
import React from 'react';
import styled, { css } from 'react-emotion';
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
import SearchFilter from '../../utils/SearchFilter';


const wrapper = css`
  padding: 70px 0;
`;

const AddForm = styled('div')`
  margin-top: -50px;
`;

const Events = ({ eventsInfo, match }) => (
  <Container className={wrapper}>
    {isLoggedIn() ? <AddForm><EventForm id={Object.keys(eventsInfo).length + 1} /></AddForm> : null}
    <SearchFilter details={eventsInfo} url={match.url} />
    <List>
      {Object.keys(eventsInfo)
        .map(event => <EventsItem id={event} key={event} details={eventsInfo[event]} />)}
    </List>
  </Container>
);

const mapStateToProps = state => ({
  eventsInfo: state.eventsInfo.events,
});

const mapDispatchToProps = dispatch => ({
  getEventsData: bindActionCreators(getEventsRequest, dispatch),
});

Events.propTypes = {
  eventsInfo: PropTypes.shape({
    body: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    more: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      if (!Object.keys(this.props.eventsInfo).length) {
        this.props.getEventsData();
      }
    },
  }),
)(Events);
