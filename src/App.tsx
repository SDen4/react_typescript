import React from 'react';
import {} from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { TodosPage } from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <TodosPage />
      </div>
    </>
  );
};

export default App;
