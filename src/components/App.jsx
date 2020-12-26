import React, { useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import Context from '../context';
// components
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}
