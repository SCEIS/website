import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, styled, responsiveFontSizes } from '@mui/material/styles'


let theme = createTheme({
  typography: {
    fontFamily: `'Sintony', sans-serif`,
    h1 : {
      fontFamily: `"Sora", sans-serif`,
      fontWeight : 600,
    },
    h2 : {
      fontFamily: `"Sora", sans-serif`,
    },
    h3 : {
      fontFamily: `"Sora", sans-serif`,
      fontWeight : 600,
    },
    h4 : {
      fontFamily: `'Sen', sans-serif`,
      fontWeight : 500,
      paddingBottom: 10
    },
    h5 : {
      fontFamily: `'Sen', sans-serif`,
    },
    subtitle1 : {
      fontWeight : 400,
      fontSize : 14,
    },
    subtitle2 : {
      fontWeight : 400,
      fontSize : 12
    },
    code : {
      fontFamily : `'Source Code Pro', monospace;`,
      fontWeight : 400,
    }
  }
});
  
theme = responsiveFontSizes(theme);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
