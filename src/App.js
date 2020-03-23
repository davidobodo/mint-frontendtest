import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from "./styling/GlobalStyles";
import { theme } from './styling/theme'

import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Navbar />
        Hello
      </div>
    </ThemeProvider >
  );
}

export default App;


