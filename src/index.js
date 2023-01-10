import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Parent from './Parent';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Parent />
  </StrictMode>
);
