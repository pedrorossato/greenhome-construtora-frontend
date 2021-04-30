import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Construcoes from './Pages/Construcoes';
import Home from './Pages/Home';
import GlobalStyle from './Styles/GlobalStyle';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={Construcoes} path='/Construcoes'/>
      </Switch>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default Routes;