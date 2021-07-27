import { get, set } from '../storages/local.storage';

const TODOS_KEY = 'todos';

export const getTodos = () => get(TODOS_KEY) ?? [];

export const setTodos = (todos) => set(TODOS_KEY, todos);
