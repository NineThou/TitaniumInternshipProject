import React from 'react';
import { reduxForm } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import RenderField from '../../utils/RenderField';
import RenderTextArea from '../../utils/RenderTextArea';
import RenderRadio from '../../utils/RenderRadio';
import { minLength4, minLength15, maxLength500 } from '../../utils/validation';
import { editPostRequest, getPostsRequest } from '../../actions/posts-api';
import MyCustomForm from '../../commons/MyCustomForm';
import { NiceForm, Title } from '../../styles/emotionComponents';

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
  },
  {
    name: 'text',
    type: 'textarea',
    component: RenderTextArea,
    label: 'Description',
    validate: [
      minLength15,
      maxLength500,
    ],
  },
  {
    name: 'more',
    type: 'textarea',
    component: RenderTextArea,
    label: 'How to cook',
    validate: [
      minLength15,
      maxLength500,
    ],
  },
  {
    name: 'image',
    type: 'text',
    component: RenderField,
    label: 'Image',
  },
  {
    name: 'dishtype',
    type: 'radio',
    component: RenderRadio,
  },
];

const PostEdit = ({ handleSubmit }) => (
  <Wrapper>
    <NiceForm>
      <Title>Edit the post</Title>
      <MyCustomForm handleSubmit={handleSubmit} data={data} />

    </NiceForm>
  </Wrapper>
);

PostEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


const mapStateToProps = (state, { match }) => ({
  postInfo: state.postsInfo.posts,
  initialValues: state.postsInfo.posts[match.params.postId],
});

const PostEditForm = reduxForm({
  onSubmit: (values, dispatch, { match, history }) => {
    const { postId } = match.params;
    const formData = {
      ...values, id: postId,
    };
    dispatch(editPostRequest(postId, formData));
    history.push(`/posts/${postId}`);
  },
  form: 'Post Edit',
})(PostEdit);

export default compose(
  connect(mapStateToProps, { getPostsRequest }),
  lifecycle({
    componentDidMount() {
      if (!Object.keys(this.props.postInfo).length) {
        this.props.getPostsRequest();
      }
    },
  }),
)(PostEditForm);
