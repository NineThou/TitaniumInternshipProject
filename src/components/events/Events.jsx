// modules
import React from 'react';
import { Container, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';

import { getEventsRequest } from '../../redux-controllers/actions/events-api-actions';

// components
import EventsItem from './EventsItem';

// class Events extends Component {
//   componentDidMount() {
//     this.props.getEventsData();
//   }
//   render() {
//     const { eventsInfo } = this.props;
//     return (
//       <Container>
//         <List>
//           {eventsInfo.map(event => <EventsItem key={event.id} details={event} />)}
//         </List>
//       </Container>
//     );
//   }
// }


// TODO fix compose
const Events = ({ eventsInfo }) => {
  console.log(eventsInfo);
  return (
    <Container>
      <List>
        {eventsInfo.map(event => <EventsItem key={event.id} details={event} />)}
      </List>
    </Container>
  );
};

const mapStateToProps = state => ({
  eventsInfo: state.eventsInfo && state.eventsInfo.events,
});

const mapDispatchToProps = dispatch => ({
  getEventsData: bindActionCreators(getEventsRequest, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getEventsData();
    },
  }),
)(Events);
