import {
    ADD_TODO,
    INIT_TODOS,
    REMOVE_TODO,
    TOGGLE_TODO,
} from '../actions/todo.action';

const initialState = {
    todos: [],
};

const todoReducer = (state= initialState, action) => {
    switch (action.type)  {
        case INIT_TODOS:
            return {
                ...state,
                todos: action.todos,
            };

        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.title,
                        isFinished: false,
                    },
                ]
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
                todos: state.todos.map((todo, i) => {
                    if (i === action.index) {
                        todo.isFinished = !todo.isFinished;
                    }

                    return todo;
                }),
            };

        default:
            return state;
    }
};

export default todoReducer;
