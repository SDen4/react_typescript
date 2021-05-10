import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import ServerTest from './components/ServerTest/ServerTest';
import ReduxTest from './components/ReduxTest/ReduxTest';
import Animation from './components/Animation/Animation';

import TodosPage from './pages/TodosPage/TodosPage';
import TablePage from './pages/TablePage/TablePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import PaginationTablePage from './pages/PaginationTablePage/PaginationTablePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
          <Route component={ServerTest} path="/server" />
          <Route component={ReduxTest} path="/redux" />
          <Route component={Animation} path="/animation" />
          <Route component={TablePage} path="/table" />
          <Route component={PaginationTablePage} path="/paginationtable" />

          {/* Redirect from any unknown paths to main */}
          <Redirect to={'/'} />

          {/* 404 page */}
          {/* <Route
            render={() => (
              <h1 style={{ color: 'red', textAlign: 'center' }}>
                404 not found
              </h1>
            )}
          /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
