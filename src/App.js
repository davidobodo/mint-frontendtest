import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from "./styling/GlobalStyles";
import { theme } from './styling/theme'

import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Navbar />
        <Sidebar />
      </div>
    </ThemeProvider >
  );
}

export default App;


