import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import decode from 'jwt-decode';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { compose, withState, withHandlers } from 'recompose';
import { setPostsRequest } from '../../actions/posts-api';
import RenderField from '../../utils/RenderField';
import RenderTextArea from '../../utils/RenderTextArea';
import { required, minLength15, minLength4 } from '../../utils/validation';
import { NiceForm, Title, Submit, formField } from '../../styles/emotionComponents';

const PostForm = ({ handleClick, isShown, slideForm }) => {
  const form = isShown ? slideForm() : null;
  return (
    <NiceForm>
      <Title onClick={handleClick}>Click to add new recipe!</Title>
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
  );
};

PostForm.propTypes = {
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
      const data = {
        ...values, id, likes: { blankLike: 'blankLike' }, user: user.nickname, date: `${time} ${month}`,
      };
      dispatch(setPostsRequest(data));
      /* eslint-disable no-param-reassign */
      Object.keys(values).map(item => delete values[item]);
      /* eslint-enable no-param-reassign */
    },
    form: 'PostForm',
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
            <Field name="text" component={RenderTextArea} type="textarea" label="Description" validate={[required, minLength15]} />
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
            <Field name="more" component={RenderTextArea} type="textarea" label="How to cook" validate={[required, minLength15]} />
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
            <Field name="image" component={RenderField} type="text" label="Paste image src here" validate={required} />
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
)(PostForm);
