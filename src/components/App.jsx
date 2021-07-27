import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadTodos } from '../actions/todo.action';
import Header from './Header';
import TodoList from './TodoList';

import './App.scss';

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(loadTodos());
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
