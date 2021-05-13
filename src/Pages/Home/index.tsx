import React from 'react'
import Logo from '../../Assets/Logo.png'
import Navbar from '../../Components/Navbar';
import { Container, Title } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Container>
        <Title>
          <h1>GreenHome</h1>
          <p>Construtora e Incorporadora</p>
        </Title>
      </Container>
    </>
  );
}

export default Home;
