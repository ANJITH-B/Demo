// App.js
import React, { useMemo, useState } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import ThemeButton from './components/themeButton';
import Theme from './theme/theme';
import Navbar from './components/navBar';
import { motion } from 'framer-motion';
import Auth from './components/login';
import Home from './pages/home';
import Cards from './components/card';
import DemoModel from './pages/demoModal';
import ScrollDialog from './components/srollModel';

const ColorModeContext = React.createContext();

const App = () => {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(() => Theme({ mode, setMode }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={colorMode.theme}>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Container>
          {/* <Navbar onToggleColorMode={colorMode.toggleColorMode} onTheme={colorMode.theme} /> */}
          <ThemeButton toggleColorMode={colorMode.toggleColorMode} theme={colorMode.theme} />
          {/* <Home/> */}
          {/* <Auth /> */}
          {/* <DemoModel/> */}
          {/* <Cards/> */}
          <ScrollDialog/>
          </Container>
        </motion.div>
        <CssBaseline />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
