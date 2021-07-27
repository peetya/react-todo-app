export const LOAD_TODOS = 'LOAD_TODOS';
export const SAVE_TODOS = 'SAVE_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const loadTodos = () => ({
  type: LOAD_TODOS,
});

export const saveTodos = () => ({
  type: SAVE_TODOS,
});

export const addTodo = (title) => ({
  type: ADD_TODO,
  title,
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  index,
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  index,
});
