import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import RenderField from '../../utils/RenderField';
import RenderTextArea from '../../utils/RenderTextArea';
import { required, minLength4, minLength15, splitWithCommas, maxLength500 } from '../../utils/validation';
import { editEventRequest, getEventsRequest } from '../../actions/events-api';
import { NiceForm, Title } from '../../styles/emotionComponents';
import MyCustomForm from '../../commons/MyCustomForm';

const Wrapper = styled('div')`
    min-height: calc(100vh - 220px);
    padding-top: 50px;
`;

const data = [
  {
    name: 'title',
    type: 'text',
    component: RenderField,
    label: 'Title',
    validate: [
      minLength4,
      maxLength500,
    ],
    disabled: false,
  },
  {
    name: 'body',
    type: 'textarea',
    component: RenderTextArea,
    label: 'Body',
    validate: [
      minLength4,
      maxLength500,
    ],
    disabled: false,
  },
  {
    name: 'more',
    type: 'textarea',
    component: RenderTextArea,
    label: 'Text',
    validate: [
      minLength15,
      maxLength500,
    ],
    disabled: false,
  },
  {
    name: 'tags',
    type: 'text',
    component: RenderField,
    label: 'Tags',
    validate: [
      required,
      splitWithCommas,
    ],
    disabled: false,
  },
  {
    name: 'image',
    type: 'text',
    component: RenderField,
    label: 'Image',
    disabled: false,
  },
];

const EventEdit = ({ handleSubmit }) => (
  <Wrapper>
    <NiceForm>
      <Title>Event Edit</Title>
      <MyCustomForm handleSubmit={handleSubmit} data={data} />
    </NiceForm>
  </Wrapper>
);

EventEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { match }) => ({
  eventsInfo: state.eventsInfo.events,
  initialValues: state.eventsInfo.events[match.params.eventId],
});

const EventEditForm = reduxForm({
  onSubmit: (values, dispatch, { match, history }) => {
    const { eventId } = match.params;
    let { tags } = values;
    tags = tags.toString().trim();
    if (tags.indexOf(' ') !== -1) {
      tags = tags.split(', ');
    } else {
      tags = tags.split(',');
    }
    tags = tags.filter(tag => tag !== '');
    const eventData = {
      ...values,
      tags,
      id: eventId,
    };
    dispatch(editEventRequest(eventId, eventData));
    history.push(`/events/${eventId}`);
  },
  form: 'Event Edit',
})(EventEdit);

export default compose(
  connect(mapStateToProps, { getEventsRequest }),
  lifecycle({
    componentDidMount() {
      if (!Object.keys(this.props.eventsInfo).length) {
        this.props.getEventsRequest();
      }
    },
  }),
)(EventEditForm);
