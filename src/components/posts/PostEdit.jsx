import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RenderField from '../../utils/RenderField';
import RenderTextArea from '../../utils/RenderTextArea';
import RenderRadio from '../../utils/RenderRadio';
import { minLength4, minLength15 } from '../../utils/validation';
import { editPostRequest, getPostsRequest } from '../../actions/posts-api';
import getPostInitialValues from '../../selectors/postEdit';


const PostEdit = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field name="title" component={RenderField} type="text" label="Title" validate={minLength4} />
    </div>
    <div>
      <Field name="text" component={RenderTextArea} type="textarea" label="Description" validate={minLength15} />
    </div>
    <div>
      <Field name="more" component={RenderTextArea} type="textarea" label="How to cook" validate={minLength15} />
    </div>
    <div>
      <Field name="image" component={RenderField} type="text" label="Image" />
    </div>
    <div>
      <Field name="dishtype" component={RenderRadio} type="radio" />
    </div>
    <button type="submit">Submit</button>
  </form>
);

PostEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  postInfo: state.postsInfo.posts,
  lol: getPostInitialValues(state),
});

export default compose(
  connect(mapStateToProps, { getPostsRequest }),
  lifecycle({
    componentDidMount() {
      this.props.getPostsRequest();
    },
  }),
  reduxForm({
    onSubmit: (values, dispatch, { match }) => {
      const { postId } = match.params;
      const data = {
        ...values, id: postId,
      };
      dispatch(editPostRequest(postId, data));
    },
    form: 'Post Edit',
    initialValues:
      {
        title: 'eqewqweqwe',
        text: 'bhgnkjhjdasdasdasdasdasd',
        more: 'eeeeeeeweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        image: 'https://occ-0-2433-1001.1.nflxso.net/art/70ca4/a4f281c8b0db74f8c09cb25c05647a59c2070ca4.jpg',
      },
  }),
)(PostEdit);
