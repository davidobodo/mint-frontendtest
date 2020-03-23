import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from "./styling/GlobalStyles";
import { theme } from './styling/theme'

import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Body from './components/body/body';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Body />
        </div>
      </div>
    </ThemeProvider >
  );
}

export default App;


