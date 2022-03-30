import { combineReducers } from "@reduxjs/toolkit";

import todosReducer from './todos';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;