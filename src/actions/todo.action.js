export const INIT_TODOS = 'INIT TODOS';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const initTodos = (todos) => ({
    type: INIT_TODOS,
    todos,
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
