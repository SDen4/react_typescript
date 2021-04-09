import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />

          {/* 404 page */}
          <Route
            render={() => (
              <h1 style={{ color: 'red', textAlign: 'center' }}>
                404 not found
              </h1>
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
