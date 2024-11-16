import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/Inter/100.css';
import '@fontsource/Inter/200.css';
import '@fontsource/Inter/300.css';
import '@fontsource/Inter/400.css';
import '@fontsource/Inter/500.css';
import '@fontsource/Inter/700.css';
import '@fontsource/Inter/800.css';
import '@fontsource/Inter/900.css';
import './index.css'
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
