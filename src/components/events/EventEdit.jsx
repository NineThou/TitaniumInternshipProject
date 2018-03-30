import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import RenderField from '../../utils/RenderField';
import RenderTextArea from '../../utils/RenderTextArea';
import { required, minLength4, minLength15, splitWithCommas } from '../../utils/validation';
import { editEventRequest } from '../../actions/events-api';
import { NiceForm, Submit, Title, formField } from '../../styles/emotionComponents';

const Wrapper = styled('div')`
    min-height: calc(100vh - 220px);
    padding-top: 50px;
`;

const EventEdit = ({ handleSubmit }) => (
  <Wrapper>
    <NiceForm>
      <Title>Event Edit</Title>
      <form className={formField} onSubmit={handleSubmit}>
        <div>
          <Field name="title" component={RenderField} type="text" label="Title" validate={[required, minLength4]} />
        </div>
        <div>
          <Field name="body" component={RenderTextArea} type="textarea" label="Body" validate={[required, minLength15]} />
        </div>
        <div>
          <Field name="more" component={RenderTextArea} type="textarea" label="Text" validate={[required, minLength15]} />
        </div>
        <div>
          <Field name="tags" component={RenderField} type="text" label="Tags" validate={[required, splitWithCommas]} />
        </div>
        <div>
          <Field name="image" component={RenderField} type="text" label="Image" validate={required} />
        </div>
        <Submit type="submit">Submit</Submit>
      </form>
    </NiceForm>
  </Wrapper>
);

EventEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


export default reduxForm({
  onSubmit: (values, dispatch, { match }) => {
    const { eventId } = match.params;
    const data = {
      ...values, id: eventId, tags: values.tags.split(', '),
    };
    dispatch(editEventRequest(eventId, data));
  },
  form: 'Event Edit',
  initialValues:
    {
      title: 'eqewqweqwe',
      body: 'bhgnkjhjdasdasdasdasdasd',
      more: 'eeeeeeeweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      tags: 'dasdas, sadas',
      image: 'https://occ-0-2433-1001.1.nflxso.net/art/70ca4/a4f281c8b0db74f8c09cb25c05647a59c2070ca4.jpg',
    },
})(EventEdit);
