import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Construcoes from './Pages/Construcoes';
import Contato from './Pages/Contato';
import Home from './Pages/Home';
import GlobalStyle from './Styles/global';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={Construcoes} path='/Construcoes'/>
        <Route component={Contato} path='/Contato'/>
      </Switch>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default Routes;