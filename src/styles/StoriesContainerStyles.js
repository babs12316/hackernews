import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #202020;
    background-color: #fafafe;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const StoriesContainerWrapper = styled.main`
  max-width: 1140px;
  padding: 20px 15px;
  margin: auto;
`;

export const MoreButton = styled.button`
box-shadow: none;
font-family: 'Lato',sans-serif;
border: none;
background: #f4511e;
border-radius: 4px;
padding: 0 32px;
display: inline-block;
margin: 16px 0 40px 32px;
height: 40px;
line-height: 40px;
color: #FFFFFF;
text-transform: uppercase;
outline: none;
-webkit-transition: all .3s;
transition: all .3s;
-webkit-text-decoration: none;
text-decoration: none;
cursor: pointer;
`;
