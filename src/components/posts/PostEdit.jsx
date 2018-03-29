import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import RenderField from '../../utils/RenderField';
import RenderTextArea from '../../utils/RenderTextArea';
import { required, minLength4, minLength15 } from '../../utils/validation';
import { editPostRequest, getPostsRequest } from '../../actions/posts-api';
import getPostInitialValues from '../../selectors/postEdit';


const PostEdit = ({ handleSubmit, lol }) => (
  <form onSubmit={handleSubmit}>
    {console.log(lol)}
    <div>
      <Field name="title" component={RenderField} type="text" label="Title" validate={[required, minLength4]} />
    </div>
    <div>
      <Field name="text" component={RenderTextArea} type="textarea" label="Description" validate={[required, minLength15]} />
    </div>
    <div>
      <Field name="more" component={RenderTextArea} type="textarea" label="How to cook" validate={[required, minLength15]} />
    </div>
    <div>
      <Field name="image" component={RenderField} type="text" label="Image" validate={required} />
    </div>
    <button type="submit">Submit</button>
  </form>
);

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
