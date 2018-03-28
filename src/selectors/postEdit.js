import { createSelector } from 'reselect';

const firstPost = state => state.postInfo;

const getPostInitialValues = createSelector(
  [firstPost],
  firstPost => (
    firstPost
      ?
      firstPost.posts[1]
      :
      undefined
  ),
);

export default getPostInitialValues;
