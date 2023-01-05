import { configureStore } from '@reduxjs/toolkit';
import reducer from 'reducers/index.js';

const store = configureStore({
  reducer,
});

export default store;
