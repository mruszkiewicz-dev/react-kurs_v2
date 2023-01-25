import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_OK = 'AUTH_OK';
export const AUTH_FAIL = 'AUTH_FAIL';

export const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => {
  const getId = () => `${Math.random().toString(36).substring(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const autheticate = (username, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  return axios
    .post('http://localhost:9001/api/user/login', { username, password })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: AUTH_OK, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: AUTH_FAIL });
    });
};
