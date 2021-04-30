import React from 'react';
import { Card, Container } from './styles';
import Logo from '../../Assets/Logo.png'
// import { Container } from './styles';

const Home: React.FC = () => (
  <Container>
    <Card>
      <img src={Logo} style={{height:'300px'}}/>
      <h1>
        Site em desenvolvimento
      </h1>
    </Card>
  </Container>
);

export default Home;
