import React from 'react';
import './App.css';
import PokeRouter from './routes/routes';
import { UserContextProvider } from './contexts/TrainerContext';

function App() {
  return (
    <UserContextProvider>
      <PokeRouter />
    </UserContextProvider>
  );
}

export default App;
