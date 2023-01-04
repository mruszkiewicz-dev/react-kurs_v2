import { configureStore } from '@reduxjs/toolkit';
import notesApp from 'reducers/index.js';

const store = configureStore({
  reducer: {
    notesApp,
  },
});

export default store;
