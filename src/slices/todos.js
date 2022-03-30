import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  todos: [],
}

// Reducers
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: (state) => {
      state.loading = true
    },
    getTodosSuccess: (state, { payload }) => {
      state.todos = payload
      state.loading = false
      state.hasErrors = false
    },
    getTodosFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    }
  }
})

// Actions
export const { getTodos, getTodosSuccess, getTodosFailure } = todosSlice.actions;

export const todosSelector = (state) => state.todos;

export default todosSlice.reducer

export function fetchTodos() {
  return async (dispatch) => {
    dispatch(getTodos())

    try {
      const response = await fetch('https://www.boredapi.com/api/activity')
      const data = await response.json()

      dispatch(getTodosSuccess(data))
    } catch (error) {
      dispatch(getTodosFailure())
    }
  }
}
