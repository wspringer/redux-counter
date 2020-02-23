import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import './styles.scss';

import { createStore } from 'redux';

const counter = (state = 1, action) => {
  switch (action.type) {
    case 'INC': {
      return state + 1;
    }
    case 'DECR': {
      return state - 1;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(counter);

const Counter = ({ count, increment, decrement }) => {
  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button>Reset</button>
      </section>
    </main>
  );
};

const mapStateToProps = state => ({
  count: state,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INC' }),
  decrement: () => dispatch({ type: 'DECR' }),
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root'),
);
