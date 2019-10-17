import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router'
import Header from './Header/header';
import './App.scss';
import routes from './../routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'

function App() {
  return (
    <div className="App">
      <Header />
      {/*FIXME why tf we need container? it has left\right paddings we actually dont need */}
      {/*<Container>*/}
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
      {/*</Container>*/}
    </div>
  );
}

export default App;
