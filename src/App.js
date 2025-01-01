import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Portfolio from './components/Portfolio';

const App = () => {
    return (
    <ThemeProvider >
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;