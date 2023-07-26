import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Auth0Provider
    domain="dev-dw6n4wxbcov4jw0p.us.auth0.com"
    clientId="tsEtvhbWfHzowGUI5OD7UFZBCykrXZb2"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>,
);
