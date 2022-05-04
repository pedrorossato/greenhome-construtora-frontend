import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import GlobalStyle from './Styles/global';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path='/'/>
      </Switch>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default Routes;