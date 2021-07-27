import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, saveTodos } from '../actions/todo.action';

const TodoCreator = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    if (title === '') {
      // do nothing
      return;
    }
    dispatch(addTodo(title));
    dispatch(saveTodos());
    setTitle('');
  };

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <li className="list-group-item">
      <form onSubmit={onSubmit}>
        <input className="form-control border-0" type="text" placeholder="What is in your mind?" value={title} onChange={onChange} />
      </form>
    </li>
  );
};

TodoCreator.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(TodoCreator);
