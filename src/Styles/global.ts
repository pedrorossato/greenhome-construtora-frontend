import {createGlobalStyle } from 'styled-components';
import { Colors } from './colors';
import NewsGothic from '../Assets/Fonts/news-gothic.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'News Gothic';
    src: local('News Gothic'), url(${NewsGothic}) format('truetype');
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
  }
  body, input, button {
    font-family: 'News Gothic', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
