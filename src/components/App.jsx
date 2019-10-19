import React from 'react';
import { Switch, Route } from 'react-router'
import Header from './Header/header';
import './App.scss';
import routes from './../routes';
import '../styles/main.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        { routes.map((route, index) => {
            return route.component ? (
              <Route 
                key={ index }
                path={ route.path }
                exact={ route.exact }
                name={ route.name }
                render={ props => (
                  <route.component { ...props } />
                )} />
            ) : null;
        })}
      </Switch>
    </div>
  );
}

export default App;