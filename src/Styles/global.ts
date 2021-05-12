import {createGlobalStyle} from 'styled-components';
import { Colors } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  body {
    background-color:${Colors.primary.green};
  }
  body, input, button {
    font: 14px 'Montserrat', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
