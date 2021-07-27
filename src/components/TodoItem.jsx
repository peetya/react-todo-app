import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTodo, saveTodos, toggleTodo } from '../actions/todo.action';

import './TodoItem.scss';

const TodoItem = ({ dispatch, todo, index }) => {
  const onChange = () => {
    dispatch(toggleTodo(index));
    dispatch(saveTodos());
  };

  const onDelete = () => {
    dispatch(removeTodo(index));
    dispatch(saveTodos());
  };

  return (
    <li className="list-group-item todo-item">
      <input className="form-check-input me-1" type="checkbox" checked={todo.isFinished} onChange={onChange} />
      <span style={{ textDecoration: todo.isFinished ? 'line-through' : 'auto' }}>{todo.title}</span>
      <span className="badge bg-danger rounded-pill float-right" onClick={onDelete}>Delete</span>
    </li>
  );
};

TodoItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    title: PropTypes.string,
    isFinished: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default connect()(TodoItem);
