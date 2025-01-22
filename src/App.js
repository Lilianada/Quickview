import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages";
import Preloader from "./pages/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading && <Preloader />}
      {!isLoading && <Home />}
    </ThemeProvider>
  );
};

export default App;
