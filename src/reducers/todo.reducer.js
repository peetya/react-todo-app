import {
  ADD_TODO,
  LOAD_TODOS,
  SAVE_TODOS,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../actions/todo.action';
import { getTodos, setTodos } from '../repositories/todo.repository';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return {
        ...state,
        todos: getTodos(),
      };

    case SAVE_TODOS:
      setTodos(state.todos);
      return state;

    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.title,
            isFinished: false,
          },
        ],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1),
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: [...state.todos].map((todo, index) => {
          if (index !== action.index) {
            return todo;
          }

          return {
            ...todo,
            isFinished: !todo.isFinished,
          };
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
