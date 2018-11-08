export const SET_POSTS = 'SET_POSTS';
export const REMOVE_POST = 'REMOVE_POST';

export const removeItem = (id) => {
  return {
    type: REMOVE_POST,
    id: id,
  }
};

export const setItems = (posts) => {
  return {
    type: SET_POSTS,
    posts: posts
  }
};
