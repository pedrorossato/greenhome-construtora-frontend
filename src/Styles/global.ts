import {createGlobalStyle } from 'styled-components';
import { Colors } from './colors';
import EngraversGothicRegular from '../Assets/Fonts/EngraversGothicRegular.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Engravers Gothic Regular';
    src: local('Engravers Gothic Regular'), url(${EngraversGothicRegular}) format('truetype');
    font-size: 300;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  body {
    background-color:${Colors.primary.green};
    color:${Colors.common.white};
  }
  body, input, button {
    font-family: 'Engravers Gothic Regular', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
