/**
 * This is the main entry point of the ecommerce application.
 * It renders the App component wrapped in Auth0Provider and StrictMode.
 * @file This file defines the root element and renders the App component.
 * @requires react
 * @requires react-dom/client
 * @requires @auth0/auth0-react
 * @requires ./app/index.css
 * @requires ./app/App
 */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
import './app/index.css';
import App from './app/App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
