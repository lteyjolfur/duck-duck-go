import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/search.css';
import './styles/icons.css';
import './styles/utilities.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);
