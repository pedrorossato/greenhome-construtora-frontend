import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  display:flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items:center;
  padding: 1rem;
  margin:0 auto;
  @media(max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:flex-start;
  font-size:1.2rem;
  @media(max-width: 960px) {
    font-size:1rem
  }
`;

export const AboutImage = styled.img`
  height: 200px;
`;
