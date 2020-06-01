import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import decode from 'jwt-decode';
import styled from 'react-emotion';
import { compose, withState, withHandlers } from 'recompose';
import CSSTransitionGroup from 'react-addons-css-transition-group';

// action
import { setEventsRequest } from '../../actions/events-api';

// helper components for redux form Field
import RenderField from '../../utils/RenderField';
import RenderTextArea from '../../utils/RenderTextArea';

// redux form validation
import { required, minLength15, minLength4, splitWithCommas } from '../../utils/validation';

// emotion styles
import { NiceForm, Submit, Title, formField } from '../../styles/emotionComponents';

const Wrapper = styled('div')`
  padding-top: 50px;
`;

const EventForm = ({ handleClick, isShown, slideForm }) => {
  const form = isShown ? slideForm() : null;
  return (
    <Wrapper>
      <NiceForm>
        <Title onClick={handleClick}>Click to add new Event!</Title>
        <CSSTransitionGroup
          transitionName="slide"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {form}
        </CSSTransitionGroup>
      </NiceForm>
    </Wrapper>
  );
};

EventForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
  slideForm: PropTypes.func.isRequired,
};


export default compose(
  reduxForm({
    onSubmit: (values, dispatch, { id }) => {
      const date = new Date();
      const time = date.toLocaleTimeString();
      const month = date.toLocaleDateString('en-US');
      const user = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';
      const tags = values.tags.split(', ');
      const data = {
        id,
        likes: 0,
        user: user.nickname,
        ...values,
        tags,
        date: `${time} ${month}`,
      };
      dispatch(setEventsRequest(data));
    },
    form: 'EventForm',
  }),
  withState('isShown', 'changeShowState', false),
  withHandlers({
    handleClick: ({ changeShowState }) => () => changeShowState(n => !n),
    slideForm: ({ handleSubmit }) => () => (
      <form className={formField} onSubmit={handleSubmit}>
        <div>
          <CSSTransitionGroup
            transitionName="slide"
            transitionAppear
            transitionAppearTimeout={500}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <Field name="title" component={RenderField} type="text" label="Title" validate={[required, minLength4]} />
          </CSSTransitionGroup>
        </div>
        <div>
          <CSSTransitionGroup
            transitionName="slide"
            transitionAppear
            transitionAppearTimeout={500}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <Field name="body" component={RenderTextArea} type="textarea" label="Body" validate={[required, minLength15]} />
          </CSSTransitionGroup>
        </div>
        <div>
          <CSSTransitionGroup
            transitionName="slide"
            transitionAppear
            transitionAppearTimeout={500}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <Field name="more" component={RenderTextArea} type="textarea" label="Text" validate={[required, minLength15]} />
          </CSSTransitionGroup>
        </div>
        <div>
          <CSSTransitionGroup
            transitionName="slide"
            transitionAppear
            transitionAppearTimeout={500}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <Field name="tags" component={RenderField} type="text" label="Tags" validate={[required, splitWithCommas]} />
          </CSSTransitionGroup>
        </div>
        <div>
          <CSSTransitionGroup
            transitionName="slide"
            transitionAppear
            transitionAppearTimeout={500}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <Field name="image" component={RenderField} type="text" label="Image" validate={required} />
          </CSSTransitionGroup>
        </div>
        <CSSTransitionGroup
          transitionName="slide"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          <Submit type="submit">Submit</Submit>
        </CSSTransitionGroup>
      </form>
    ),
  }),
)(EventForm);

