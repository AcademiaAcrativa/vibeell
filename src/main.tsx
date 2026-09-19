import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initLukaEasterEgg } from './utils/lukaEasterEgg.ts';

// Inicia o console Easter Egg
initLukaEasterEgg();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

