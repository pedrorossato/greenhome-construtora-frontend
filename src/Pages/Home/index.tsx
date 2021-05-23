import React from 'react';
import LogoFundoBranco from '../../Assets/Images/LogoFundoBranco.jpeg';
import Navbar from '../../Components/Navbar';
import { AboutImage, Container, Title } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Container>
        <Title>
          <h1>Sobre nós</h1>
          <p>A Green Home Construtora e Incorporadora surgiu no ano de 2019 </p>
        </Title>
        <AboutImage src={LogoFundoBranco}/>
      </Container>
    </>
  );
}

export default Home;
