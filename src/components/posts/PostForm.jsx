import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import decode from 'jwt-decode';
import styled from 'react-emotion';
import { setPostsRequest } from '../../actions/posts-api';
import RenderField from '../../utils/RenderField';
import RenderTextArea from '../../utils/RenderTextArea';
import RenderRadio from '../../utils/RenderRadio';
import { required, minLength15, minLength4 } from '../../utils/validation';

// colors
import { blue, lightBlue } from '../../styles/colors';

const NiceForm = styled('div')`
  width: 500px;
  padding: 30px;
  padding-top: 0px;
  background: #FFFFFF;
  margin: 50px auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);
`;

const Title = styled('h2')`
  background: #4D4D4D;
  text-transform: uppercase;
  color: #797979;
  font-size: 18px;
  font-weight: 100;
  padding: 20px;
  margin: -30px -30px 30px -30px;
`;


const Submit = styled('button')`
    background-color: ${blue};
    border: 1px solid ${blue};
    display: inline-block;
    cursor: pointer;
    color: #FFFFFF;
    font-size: 14px;
    padding: 8px 18px;
    text-decoration: none;
    text-transform: uppercase;
    transition: .4s;
    margin-top: 10px;
    :hover {
      background-color:${lightBlue};
    }
`;


const PostForm = ({ handleSubmit }) => (
  <NiceForm>
    <Title>Add new recipe!</Title>
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="title"
          component={RenderField} 
          type="text"
          label="Title"
          validate={[required, minLength4]}
        />
      </div>
      <div>
        <Field
          name="text"
          component={RenderTextArea}
          type="textarea"
          label="Description"
          validate={[required, minLength15]}
        />
      </div>
      <div>
        <Field
          name="more"
          component={RenderTextArea}
          type="textarea"
          label="How to cook"
          validate={[required, minLength15]}
        />
      </div>
      <div>
        <Field
          name="image"
          component={RenderField}
          type="text"
          label="Paste image src here"
          validate={required}
        />
      </div>
      <Field
        name="dishtype"
        component={RenderRadio}
      />
      <Submit type="submit">Submit</Submit>
    </form>
  </NiceForm>
);

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  onSubmit: (values, dispatch, { id }) => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const month = date.toLocaleDateString('en-US');
    const user = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';
    const data = {
      ...values, id, likes: { blankLike: 'blankLike' }, user: user.nickname, date: `${time} ${month}`,
    };
    console.log(data);
    // dispatch(setPostsRequest(data));
    /* eslint-disable no-param-reassign */
    Object.keys(values).map(item => delete values[item]);
    /* eslint-enable no-param-reassign */
  },
  form: 'PostForm',
  initialValues: {
    title: 'njmbhm',
    text: 'bhgnkjhjdasdasdasdasdasd',
    more: 'dsadasdasdasdasdasdasddsa',
    image: 'https://occ-0-2433-1001.1.nflxso.net/art/70ca4/a4f281c8b0db74f8c09cb25c05647a59c2070ca4.jpg',
  },
})(PostForm);
