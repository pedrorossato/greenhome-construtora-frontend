import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0 auto;
`;

export const Title = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:2rem;
  @media(max-width: 960px) {
    font-size:1.5rem
  }
`;
