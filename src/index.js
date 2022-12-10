import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppStyled } from './components/App/App.styled';
import { GlobalStyle } from 'components/GlobalStyle';
import './components/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppStyled />
    <GlobalStyle />
  </React.StrictMode>
);
