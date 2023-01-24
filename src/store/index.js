import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from 'reducers/index.js';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
