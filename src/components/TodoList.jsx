import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import TodoCreator from './TodoCreator';

const TodoList = ({ todos }) => (
  <ul className="list-group my-3">
    {todos.map((todo, index) => (
      <TodoItem key={todo.title} todo={todo} index={index} />
    ))}
    <TodoCreator />
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    isFinished: PropTypes.bool,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps)(TodoList);
