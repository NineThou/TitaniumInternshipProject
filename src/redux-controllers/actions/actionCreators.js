// post likes increment
export const incrementPostLikes = index => ({
  type: 'INCREMENT_POST_LIKES',
  index,
});

// event likes increment
export const incrementEventLikes = index => ({
  type: 'INCREMENT_EVENT_LIKES',
  index,
});

// add post
export const addPost = (title, content, img) => ({
  type: 'ADD_POST',
  title,
  content,
  img,
});

// add event
export const addEvent = (title, previewInfo, moreInfo, tags, img) => ({
  type: 'ADD_EVENT',
  title,
  previewInfo,
  moreInfo,
  tags,
  img,
});

