import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from "./styling/GlobalStyles";
import { theme } from './styling/theme';

import styled from 'styled-components';


import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Body from './components/body/body';

const AppContainer = styled.div`
  max-width: 1440px;
  min-width: 1440px;
  margin: auto;
  background-color: #f7f8fa;
`;

const AppBodyContainer = styled.div`
  display: flex;

`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <AppBodyContainer>
          <Sidebar />
          <Body />
        </AppBodyContainer>
      </AppContainer>
    </ThemeProvider >
  );
}

export default App;


