import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/next';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
