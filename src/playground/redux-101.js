import { createStore } from 'redux';

// Action Generators (functions that return action objects)

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// (a pure function is when the output is only determined by the input)
// (we don't want to change variables outside of the reducer scope)
// (and we don't want to rely on values from variables outside the reducer scope)
// 2. Never change state or action (the ones on the next line)

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions (an action is just an object that gets sent to the store)

//I'd like to increment the count by 5
store.dispatch(incrementCount({ incrementBy: 5 }));

//I'd like to increment the count
store.dispatch(incrementCount());

// //I'd like to reset the count to zero
store.dispatch(resetCount());

//I'd like to decrement the count
store.dispatch(decrementCount());

//I'd like to decrement the count by 10
store.dispatch(decrementCount({ decrementBy: 10 }));

// //I'd like to set the count to 101
store.dispatch(setCount({ count: 100}));