import styled from 'styled-components';
import FundoCidade from '../../Assets/Images/fundoCidade.jpg'
import { Colors } from '../../Styles/colors';

export const ProjetosDiv = styled.div`
  background-image: url(${FundoCidade});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${Colors.common.white};
  box-shadow: inset 0 0 0 1000px rgba(0,104,34,.7);
  width: 100%;
  height: calc(100vh - 100px);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  display:flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items:center;
  flex-direction:column;
  text-align:center;
  margin:0 auto;
  @media(max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:2rem;
  @media screen and (max-width: 960px) {
    font-size:1.5rem
  }
`;

export const AboutImage = styled.img`
  height: 200px;
`;
